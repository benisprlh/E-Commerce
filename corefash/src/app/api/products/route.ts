import { getProduct } from '@/db/models/product';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') as string;
  const name = (searchParams.get('search') || '') as string;
  console.log(name);

  const data = await getProduct(+page, name);
  return NextResponse.json(data);
}
