import Product from '@/components/product';

export type dataType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

/* eslint-disable @next/next/no-img-element */
export default function DetailProduct() {
  const data: dataType = {
    id: 22,
    title: 'Elbow Macaroni - 400 gm',
    description: 'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
    price: 14,
    discountPercentage: 15.58,
    rating: 4.57,
    stock: 146,
    brand: 'Bake Parlor Big',
    category: 'groceries',
    thumbnail: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/22/1.jpg', 'https://i.dummyjson.com/data/products/22/2.jpg', 'https://i.dummyjson.com/data/products/22/3.jpg'],
  };

  return (
    <main className="max-w-7xl mx-auto p-6">
      <Product />
    </main>
  );
}
