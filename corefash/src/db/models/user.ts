import { UserModelCreateInput } from '@/types';
import { getMongoCLientInstance } from '../config';
import { hashPass } from '../helpers/hash';

const DATABASE_NAME = 'coreFash';

export const getDb = async () => {
  const client = await getMongoCLientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const createUser = async (user: UserModelCreateInput) => {
  console.log(user, '<<< ini model');
  const modifiedUser = {
    ...user,
    password: hashPass(user.password),
  };

  const db = await getDb();
  const result = await db.collection('Users').insertOne(modifiedUser);
  return result;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  console.log('apakah masuk');
  const user = await db.collection('Users').findOne({ email });
  return user;
};
