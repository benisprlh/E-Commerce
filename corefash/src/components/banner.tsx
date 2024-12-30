/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';

interface BannerProps {
  images: string[];
}

const Banner = ({ images }: BannerProps) => {
  const [index, setIndex] = useState(0);

  const changeIndexAuto = () => {
    const newIndex = (index + 1) % images.length;
    setIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(changeIndexAuto, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="max-w-[1200px] h-[300px] md:h-[400px] w-full m-auto py-2 px-2 relative">
      <div style={{ backgroundImage: `url(${images[index]})` }} className=" w-full h-full rounded-2xl bg-center bg-cover duration-1000"></div>
    </div>
  );
};

export default Banner;
