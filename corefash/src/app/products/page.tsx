/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState } from 'react';
import ListProducts from '../../components/listProduct';
import Search from '../../components/search';

export default function Products() {
  const [search, setSearch] = useState('');
  return (
    <div className="container mx-auto my-6 ">
      <Search search={search} setSearch={setSearch} />
      <div className="">
        <ListProducts isRemove={false} search={search} />
      </div>
    </div>
  );
}
