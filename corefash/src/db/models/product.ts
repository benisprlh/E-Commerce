import { ProductModelOutput } from '@/types';
import { getDb } from './user';
import { ObjectId } from 'mongodb';
import { connectRedis } from '../config/redis';

export const getProduct = async (page: number, name: string): Promise<ProductModelOutput[]> => {
  const redis = await connectRedis();
   const user = await redis.get('user:session')
   console.log(user, "<<<< ini usernya")
  const skipValue = (page - 1) * 10;
  const db = await getDb();
  const products = (await db
    .collection('Products')
    .aggregate([{ $match: { name: { $regex: name, $options: 'i' } } }, { $skip: skipValue }, { $limit: 10 }])
    .toArray()) as ProductModelOutput[];
  return products;
};

export const getProductDetail = async (id: string): Promise<ProductModelOutput | null> => {
  const db = await getDb();
  const objectId = new ObjectId(id);
  const product = (await db.collection('Products').findOne({ _id: new ObjectId(id) })) as ProductModelOutput | null;
  return product;
};
