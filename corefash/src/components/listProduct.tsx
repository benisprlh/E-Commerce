/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import CardProduct from './cardProduct';
import { ProductModelOutput } from '@/types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function ListProducts({ isRemove, search }: { isRemove: boolean; search: string }) {
  const [data, setData] = useState<ProductModelOutput[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_DB_URL + `/api/products?page=${page}&search=${search}`;
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
      });
      const product = await response.json();
      if (product.length === 0) {
        setHasMore(false);
      } else {
        setData([...data, ...product]);
        setPage(page + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setData([]);
    setPage(1);
    setHasMore(true);
    fetchData();
  }, [search]);

  return (
    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={
        <div className="flex items-center justify-center">
          <span className="loading loading-dots loading-md"></span>
        </div>
      }
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>You have seen it all</b>
        </p>
      }
    >
      <div className="grid lg:grid-cols-3 grid-cols-2 justify-center p-6">
        {data.map((product: ProductModelOutput, idx: number) => {
          return <CardProduct product={product} isRemove={isRemove} key={idx} />;
        })}
      </div>
    </InfiniteScroll>
  );
}
