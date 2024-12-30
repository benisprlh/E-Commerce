import { getProductDetail } from '@/db/models/product';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id') as string;

  const data = await getProductDetail(id);
  return NextResponse.json(data);
}
