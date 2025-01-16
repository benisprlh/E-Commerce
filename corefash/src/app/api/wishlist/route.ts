import { addWishlist, getWishList, getWishListRedis, removeWishlist } from '@/db/models/wishlist';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const id = z.object({
  productId: z.string(),
  userId: z.string(),
});

export async function GET(request: NextRequest) {
  const userId = request.headers.get('x-user-id') as string;

  const myWishList = await getWishListRedis(userId);
  return NextResponse.json(myWishList);
}

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId') as string;

    const userId = request.headers.get('x-user-id') as string;
    const validationId = id.safeParse({ productId, userId });
    if (!validationId.success) {
      throw validationId.error;
    }

    const newWishList = addWishlist(userId, productId);
    return NextResponse.json(newWishList);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json({
        message: `${errPath} ${errMessage.toLocaleLowerCase()}`,
      });
    }
    return NextResponse.json(
      {
        message: 'Internal server error',
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('id') as string;
  const userId = request.headers.get('x-user-id') as string;
  

  const validationId = id.safeParse({ productId, userId });

  if (!validationId.success) {
    throw validationId.error;
  }

  const deletedWishList = await removeWishlist(userId, productId);
  return NextResponse.json(deletedWishList);
}
