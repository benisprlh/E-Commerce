import { ObjectId } from 'mongodb';
import { getDb } from './user';
import { connectRedis, disconnectRedis } from '../config/redis';
import { clientEs } from '../config/elastic';
import { Client } from '@elastic/elasticsearch';

export const addWishlist = async (userId: string, productId: string) => {
  const db = await getDb();
  const redis = await connectRedis();
  const wishlist = await db.collection('WishLists').findOne({ userId: new ObjectId(userId), productId: new ObjectId(productId) });
  if (wishlist) {
    return;
  }
  const newWishList = await db.collection('WishLists').insertOne({ userId: new ObjectId(userId), productId: new ObjectId(productId), createdAt: new Date(), updatedAt: new Date() });
  await redis.del(`wishlist:${userId}`); 
  return newWishList;
};

export const removeWishlist = async (userId: string, productId: string) => {
  const db = await getDb();
  const redis = await connectRedis();
  const deletedWishList = await db.collection('WishLists').deleteOne({ userId: new ObjectId(userId), productId: new ObjectId(productId) });
  await redis.del(`wishlist:${userId}`); 
  await disconnectRedis()
  return deletedWishList;
};

export const getWishList = async (userId: string) => {
  const db = await getDb();
    console.time('redis')
    const myWishList = await db
      .collection('Users')
      .aggregate([
        {
          $match: { _id: new ObjectId(userId) },
        },
        {
          $project: { password: 0 },
        },
        {
          $lookup: {
            from: 'WishLists',
            localField: '_id',
            foreignField: 'userId',
            as: 'myWishLists',
          },
        },
        {
          $lookup: {
            from: 'Products',
            localField: 'myWishLists.productId',
            foreignField: '_id',
            as: 'myProducts',
          },
        },
      ])
      .toArray();
      console.timeEnd("redis")
      return myWishList[0];
};

export const getWishlistOnElasticSearch = async (userId: string) => {
  let document: any
  try {
     document = await clientEs.get({
      index: 'wishlist',
      id: userId
    })
    
    
  } catch (error) {
      console.log(error, "<<<, ini errornya")
  }
  if(document) return document._source;
  const db = await getDb();

    const myWishList = await db
      .collection('Users')
      .aggregate([
        {
          $match: { _id: new ObjectId(userId) },
        },
        {
          $project: { password: 0 },
        },
        {
          $lookup: {
            from: 'WishLists',
            localField: '_id',
            foreignField: 'userId',
            as: 'myWishLists',
          },
        },
        {
          $lookup: {
            from: 'Products',
            localField: 'myWishLists.productId',
            foreignField: '_id',
            as: 'myProducts',
          },
        },
      ])
      .toArray();
  // }
  


    const {_id, ...documentBody} = myWishList[0]
     const client = new Client({
      node: 'https://10.100.34.131:9243',
      auth: {
        username: 'admin',
        password: 'P@ssw0rd'
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    try {
      // const response = await client.ping()

      // const document = await client.get({
      //   index: 'wishlist',
      //   id: _id
      // })

      let response: any = '';
      if(!document){
         response = await client.index({
          index: `wishlist`,
          id: userId,
          document: documentBody
        })
      }

      console.log('Data disimpan ke Elasticsearch', response);
    } catch (error) {
      console.error('Gagal menyimpan ke Elasticsearch:', error);
    }
    return myWishList[0]

    // }
}

export const getWishListRedis = async (userId: string) => {

  const redis = await connectRedis();
  console.time("Redis")
  let wishList = await redis.get(`wishlist:${userId}`) 
  console.timeEnd("Redis")
  if(wishList && wishList !== null){
    console.log('ini dari redis')
    return JSON.parse(wishList);
  }
  const db = await getDb();

    const myWishList = await db
      .collection('Users')
      .aggregate([
        {
          $match: { _id: new ObjectId(userId) },
        },
        {
          $project: { password: 0 },
        },
        {
          $lookup: {
            from: 'WishLists',
            localField: '_id',
            foreignField: 'userId',
            as: 'myWishLists',
          },
        },
        {
          $lookup: {
            from: 'Products',
            localField: 'myWishLists.productId',
            foreignField: '_id',
            as: 'myProducts',
          },
        },
      ])
      .toArray();
  
    if(!wishList || (Array(JSON.parse(wishList)).length < 1)) {
      await redis?.set(`wishlist:${userId}`, JSON.stringify(myWishList[0]))
      console.log(myWishList, "ini dari mongodb")
      return myWishList[0];
    }
    

};

export const getWishListMongoDB = async (userId: string) => {
  console.time("mongodb")
  const db = await getDb();
    const myWishList = await db
      .collection('Users')
      .aggregate([
        {
          $match: { _id: new ObjectId(userId) },
        },
        {
          $project: { password: 0 },
        },
        {
          $lookup: {
            from: 'WishLists',
            localField: '_id',
            foreignField: 'userId',
            as: 'myWishLists',
          },
        },
        {
          $lookup: {
            from: 'Products',
            localField: 'myWishLists.productId',
            foreignField: '_id',
            as: 'myProducts',
          },
        },
      ])
      .toArray();
      console.timeEnd("mongodb")
      return myWishList[0];
};