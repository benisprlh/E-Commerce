'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/* eslint-disable import/no-anonymous-default-export */
export default async () => {
  cookies().get('Authorization') && cookies().delete('Authorization');

  redirect('/login');
};
