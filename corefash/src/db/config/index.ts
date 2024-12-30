require('dotenv').config();

import RedisClient from '@redis/client/dist/lib/client';
import { error } from 'console';
import { MongoClient } from 'mongodb';
const uri = process.env.MONGO_URI as string;

if (!uri) {
  throw new Error('Connection string belum ada');
}

let client: MongoClient;
export async function getMongoCLientInstance() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client;
}