'use client';

import { ProductModelOutput, myWishListType } from '@/types';
import { useEffect, useState } from 'react';
import RemoveToWishList from './removeWishList';

export default function ListWishList() {
  const [myProducts, setMyProducts] = useState([]);
  const fetchData = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_DB_URL + `/api/wishlist`;
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-store',
      });
      const userDetail: myWishListType = await response.json();
      console.log(userDetail);
      setMyProducts(userDetail.myProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (myProducts.length == 0) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }

  return (
    <table className="table table-zebra">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Name Product</th>
          <th>slug</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {myProducts.map((el: ProductModelOutput, index) => {
          return (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{el.name}</td>
              <td>{el.slug}</td>
              <td>
                <RemoveToWishList onRemove={fetchData} id={el._id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
