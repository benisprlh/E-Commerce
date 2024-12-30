/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ProductModelOutput } from '@/types';
import { useEffect, useState } from 'react';
import CardProduct from './cardProduct';

export default function FeatureProduct() {
  const [data, setData] = useState<ProductModelOutput[]>([]);
  const page = 1;

  const fetchData = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_DB_URL + `/api/products?page=${page}`;
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
      });
      const product = await response.json();

      setData(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <div className="flex flex--row gap-2">
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {data.map((product: ProductModelOutput, idx: number) => {
        return <CardProduct product={product} isRemove={false} key={idx} />;
      })}
    </>
  );
}
