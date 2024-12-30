import { ObjectId } from 'mongodb';
import { getDb } from './user';
import { connectRedis } from '../config/redis';
// import {connectRedis} from '../config';

export const addWishlist = async (userId: string, productId: string) => {
  const db = await getDb();
  const redis = await connectRedis();
  console.log(userId, "<<< ini user idnya")
  const wishlist = await db.collection('WishLists').findOne({ userId: new ObjectId(userId), productId: new ObjectId(productId) });
  if (wishlist) {
    return;
  }
  const newWishList = await db.collection('WishLists').insertOne({ userId: new ObjectId(userId), productId: new ObjectId(productId), createdAt: new Date(), updatedAt: new Date() });
  await redis.del('wishlist'); 
  return newWishList;
};

export const removeWishlist = async (userId: string, productId: string) => {
  const db = await getDb();
  const redis = await connectRedis();
  console.log('ini remove');
  const deletedWishList = await db.collection('WishLists').deleteOne({ userId: new ObjectId(userId), productId: new ObjectId(productId) });
  console.log(deletedWishList);
  await redis.del('wishlist'); 
  return deletedWishList;
};

export const getWishList = async (userId: string) => {
  const db = await getDb();

  const redis = await connectRedis();
  

  // let wishList = await redis.get('wishlist')  
  // console.log(wishList, "<<<< ini wishlistnya")
  // if(wishList && wishList !== null){
  //   console.log('ini dari redis')
  //   return JSON.parse(wishList);
  // }
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
  
    // console.log(myWishList)
    // if(!wishList || (Array(JSON.parse(wishList)).length < 1)) {
    //   console.log(myWishList, "<<<< ini wishlistnya")
      await redis?.set('wishlist', JSON.stringify(myWishList[0]))
      console.log("ini dari mongodb")
      return myWishList[0];
    // }
    

};

export const getWishListRedis = async (userId: string) => {
  const db = await getDb();
  console.log("Masuk sini gak bro")

  const redis = await connectRedis();
  
  let wishList = await redis.get('wishlist')  
  // console.log(wishList, "<<<< ini wishlistnya")
  if(wishList && wishList !== null){
    console.log('ini dari redis')
    return JSON.parse(wishList);
  }
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
  
    // console.log(myWishList)
    if(!wishList || (Array(JSON.parse(wishList)).length < 1)) {
      // console.log(myWishList, "<<<< ini wishlistnya")
      await redis?.set('wishlist', JSON.stringify(myWishList[0]))
      console.log(myWishList, "ini dari mongodb")
      return myWishList[0];
    }
    

};

export const getWishListMongoDB = async (userId: string) => {
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
  console.log(myWishList, "<<<< ini my wishlistnya")
  
      return myWishList[0];
};