/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { ProductModelOutput } from '@/types';
import { useSearchParams } from 'next/navigation';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import React from 'react';

export default function Product() {
  const [images, setImages] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState<ProductModelOutput>();
  const [activeImage, setActiveImage] = useState<string>();

  const fetchData = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_DB_URL + `/api/product?id=${id}`;
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-store',
      });
      const product = await response.json();
      setProduct(product);
      setImages(product.images);
      setActiveImage(product.images[0]);
    } catch (error) {
      console.log(error);
    }
  };

  async function handleWishList() {
    const url = process.env.NEXT_PUBLIC_DB_URL + `/api/wishlist?productId=${product?._id}`;
    const response = await fetch(url, {
      method: 'POST',
    });
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-between lg:flex-row gap-16">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img src={activeImage} alt="Shoes" className="w-full h-full aspect-square object-cover rounded-xl" />
          <div className="flex flex-row gap-6 h-24">
            {product.images?.map((item: string, index) => {
              return <img src={item} alt="Shoes" className="h-24 w-24 rounded-md cursor-pointer" key={index} onClick={() => setActiveImage(item)} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <h6 className="text-lg font-semibold">{product.price}</h6>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center">
              <button className="bg-violet-800 text-white font-semibold py-3 px-6 rounded-xl h-full" onClick={handleWishList}>
                Add To WishList
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
