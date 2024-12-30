/* eslint-disable @next/next/no-img-element */
// require('dotenv').config();

import 'react-toastify/dist/ReactToastify.css';

import Banner from '../components/banner';
import DetailEC from '../components/detailEC';
import Link from 'next/link';
import FeatureProduct from '@/components/featuredProduct';

export default function Home() {
  const images = [
    'https://static.vecteezy.com/system/resources/previews/008/629/549/non_2x/abstract-banner-template-with-dummy-text-for-web-design-landing-page-background-etc-free-vector.jpg',
    'https://www.shutterstock.com/image-vector/colorful-abstract-banner-template-dummy-260nw-1538379305.jpg',
    'https://static.vecteezy.com/system/resources/previews/003/085/046/original/colorful-abstract-banner-template-with-dummy-text-hand-drawn-doodle-vector.jpg',
  ];

  return (
    <main className="bg-base-100">
      <Banner images={images} />
      <DetailEC />
      <div className="max-w-[1200px] w-full h-[500] m-auto px-4">
        <h2 className="text-center py-5 text-xl">Products</h2>
        <div className="snap-x snap-start overflow-x-auto border-2 p-6">
          <div className=" items-center flex flex-row flex-nowrap">
            <FeatureProduct />
            <Link href={'/products'} className="btn btn-outline my-2">
              See All
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
