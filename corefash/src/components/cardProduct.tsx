'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ProductModelOutput } from '@/types';
import AddToWishList from './addToWishlist';

/* eslint-disable @next/next/no-img-element */
export default function CardProduct({ product, isRemove }: { product: ProductModelOutput; isRemove: boolean }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="mx-3 my-2 flex items-stretch">
      <div className={`card flex-1 w-96 lg:h-[500px] h-[600px] bg-base-100 shadow-xl transition-transform transform-gpu hover:scale-105 duration-700`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <figure className="">
          <img src='/product.png' alt={product.name} className="rounded-xl w-96 h-96" />
        </figure>
        <div className="card-body transition-opacity">
          <h2 className={`card-title transition-colors`}>{product.name.toUpperCase()}</h2>
          <p className={`${isHover ? 'lg:opacity-0 lg:absolute opacity-100 cursor-pointer' : 'lg:transition-all opacity-100 lg:duration-700 '}`}>{product.excerpt}</p>
          <div className={`flex items-center gap-2 ${isHover ? 'lg:transition-all opacity-100 lg:duration-700 cursor-pointer' : 'lg:opacity-0 lg:absolute opacity-100'}`}>
            <Link href={{ pathname: `http://localhost:3000/products/${product.slug}`, query: { id: product._id } }} className={`flex-1 btn btn-primary hover:opacity-100 transition-transform duration-300`}>
              See Detail
            </Link>
            {/* {isRemove ? <RemoveToWishList /> : <AddToWishList />} */}
            <AddToWishList productId={product._id} />
          </div>
        </div>
      </div>
    </div>
  );
}
