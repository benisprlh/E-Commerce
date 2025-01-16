import { getWishList, getWishlistOnElasticSearch, getWishListRedis } from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userId = request.headers.get('x-user-id') as string;

  const myWishList = await getWishlistOnElasticSearch(userId);
  return NextResponse.json(myWishList);
}