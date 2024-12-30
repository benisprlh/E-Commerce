const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://benisaprulah5:SB8ypV82i80wOAt4@cluster0.2cocu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const data = [
  {
    title: 'Half Sleeves T-Shirts',
    description: "Many stores are creating new designs and trends every month and every year. Daraz.pk has a beautiful range of men's fashion brands.",
    price: '23.000',
    thumbnail: 'https://i.dummyjson.com/data/products/51/1.png',
    images: ['https://i.dummyjson.com/data/products/51/1.png', 'https://i.dummyjson.com/data/products/51/2.jpg', 'https://i.dummyjson.com/data/products/51/3.jpg', 'https://i.dummyjson.com/data/products/51/thumbnail.jpg'],
    slug: 'half-sleeves-t-shirts',
    excerpt: 'Explore the latest half sleeves T-shirts with trendy designs and styles. Perfect for any occasion.',
    tags: ['T-Shirts', "Men's Fashion"],
  },
  {
    title: 'Free Fire T-Shirt',
    description: "Quality and professional print - It doesn't just look high quality, it is high quality.",
    price: '10.000',
    thumbnail: 'https://i.dummyjson.com/data/products/52/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/52/1.png',
      'https://i.dummyjson.com/data/products/52/2.png',
      'https://i.dummyjson.com/data/products/52/3.jpg',
      'https://i.dummyjson.com/data/products/52/4.jpg',
      'https://i.dummyjson.com/data/products/52/thumbnail.jpg',
    ],
    slug: 'free-fire-t-shirt',
    excerpt: 'Experience the world of Free Fire with our exclusive Free Fire T-Shirt. High-quality prints that stand out.',
    tags: ['T-Shirt', 'Gaming', 'Printed'],
  },
  {
    title: 'Printed High Quality T-Shirts',
    description: 'Brand: Vintage Apparel, Export quality.',
    price: '35.000',
    thumbnail: 'https://i.dummyjson.com/data/products/53/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/53/1.webp',
      'https://i.dummyjson.com/data/products/53/2.jpg',
      'https://i.dummyjson.com/data/products/53/3.jpg',
      'https://i.dummyjson.com/data/products/53/4.jpg',
      'https://i.dummyjson.com/data/products/53/thumbnail.jpg',
    ],
    slug: 'printed-high-quality-t-shirts',
    excerpt: 'Discover the elegance of printed high-quality T-shirts from Vintage Apparel. Export quality and stylish designs.',
    tags: ['T-Shirts', 'Vintage Apparel', 'Printed'],
  },
  {
    title: 'Pubg Printed Graphic T-Shirt',
    description: 'Product Description Features: 100% Ultra-soft Polyester Jersey. Vibrant & colorful printing on the front. Feels soft as cotton without ever cracking.',
    price: '46.000',
    thumbnail: 'https://i.dummyjson.com/data/products/54/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/54/1.jpg',
      'https://i.dummyjson.com/data/products/54/2.jpg',
      'https://i.dummyjson.com/data/products/54/3.jpg',
      'https://i.dummyjson.com/data/products/54/4.jpg',
      'https://i.dummyjson.com/data/products/54/thumbnail.jpg',
    ],
    slug: 'pubg-printed-graphic-t-shirt',
    excerpt: 'Immerse yourself in the gaming world with our Pubg Printed Graphic T-Shirt. Ultra-soft fabric for maximum comfort.',
    tags: ['T-Shirt', 'Pubg', 'Graphic'],
  },
  {
    title: 'Money Heist Printed Summer T Shirts',
    description: 'Fabric Jercy, Size: M & L Wear Stylish Dual Stiched.',
    price: '66.000',
    thumbnail: 'https://i.dummyjson.com/data/products/55/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/55/1.jpg',
      'https://i.dummyjson.com/data/products/55/2.webp',
      'https://i.dummyjson.com/data/products/55/3.jpg',
      'https://i.dummyjson.com/data/products/55/4.jpg',
      'https://i.dummyjson.com/data/products/55/thumbnail.jpg',
    ],
    slug: 'money-heist-printed-summer-t-shirts',
    excerpt: 'Get ready for summer with our stylish Money Heist Printed Summer T Shirts. Perfect for casual and trendy looks.',
    tags: ['T-Shirts', 'Money Heist', 'Summer'],
  },
  {
    title: 'Sneakers Joggers Shoes',
    description: 'Gender: Men, Colors: Same as Displayed. Condition: 100% Brand New.',
    price: '40.000',
    thumbnail: 'https://i.dummyjson.com/data/products/56/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/56/1.jpg',
      'https://i.dummyjson.com/data/products/56/2.jpg',
      'https://i.dummyjson.com/data/products/56/3.jpg',
      'https://i.dummyjson.com/data/products/56/4.jpg',
      'https://i.dummyjson.com/data/products/56/5.jpg',
      'https://i.dummyjson.com/data/products/56/thumbnail.jpg',
    ],
    slug: 'sneakers-joggers-shoes',
    excerpt: 'Step out in style with our Sneakers Joggers Shoes. Comfortable and trendy, perfect for any casual occasion.',
    tags: ['Shoes', 'Sneakers', "Men's Fashion"],
  },
  {
    title: 'Loafers for Men',
    description: 'Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Export Quality.',
    price: '47.000',
    thumbnail: 'https://i.dummyjson.com/data/products/57/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/57/1.jpg',
      'https://i.dummyjson.com/data/products/57/2.jpg',
      'https://i.dummyjson.com/data/products/57/3.jpg',
      'https://i.dummyjson.com/data/products/57/4.jpg',
      'https://i.dummyjson.com/data/products/57/thumbnail.jpg',
    ],
    slug: 'loafers-for-men',
    excerpt: 'Step out with confidence in our Loafers for Men. Stylish and comfortable, suitable for any occasion.',
    tags: ['Shoes', 'Loafers', "Men's Fashion"],
  },
  {
    title: 'Formal Offices Shoes',
    price: '57.000',
    thumbnail: 'https://i.dummyjson.com/data/products/58/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/58/1.jpg',
      'https://i.dummyjson.com/data/products/58/2.jpg',
      'https://i.dummyjson.com/data/products/58/3.jpg',
      'https://i.dummyjson.com/data/products/58/4.jpg',
      'https://i.dummyjson.com/data/products/58/thumbnail.jpg',
    ],
    slug: 'formal-offices-shoes',
    excerpt: 'Elevate your office look with our Formal Offices Shoes. Classic and sophisticated for a professional appearance.',
    tags: ['Shoes', 'Formal', "Men's Fashion"],
  },
  {
    title: 'Spring and Summer Shoes',
    price: '20.000',
    thumbnail: 'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/59/1.jpg',
      'https://i.dummyjson.com/data/products/59/2.jpg',
      'https://i.dummyjson.com/data/products/59/3.jpg',
      'https://i.dummyjson.com/data/products/59/4.jpg',
      'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
    ],
    slug: 'spring-and-summer-shoes',
    excerpt: 'Step into spring and summer with style. Our Spring and Summer Shoes are trendy, comfortable, and perfect for the season.',
    tags: ['Shoes', 'Spring', 'Summer', "Women's Fashion"],
  },
  {
    title: 'Stylish Casual Jeans Shoes',
    description: 'High Quality, Stylish design, Comfortable wear, Fashion, Durable.',
    price: '58.000',
    thumbnail: 'https://i.dummyjson.com/data/products/60/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/60/1.jpg', 'https://i.dummyjson.com/data/products/60/2.jpg', 'https://i.dummyjson.com/data/products/60/3.jpg', 'https://i.dummyjson.com/data/products/60/thumbnail.jpg'],
    slug: 'stylish-casual-jeans-shoes',
    excerpt: 'Step out in confidence with our Stylish Casual Jeans Shoes. High quality and fashionable, perfect for casual outings.',
    tags: ['Shoes', 'Casual', 'Jeans', "Women's Fashion"],
  },
  {
    title: 'Leather Straps Wristwatch',
    description: 'Style: Sport, Clasp: Buckles, Water Resistance Depth: 3Bar.',
    price: '12.000',
    thumbnail: 'https://i.dummyjson.com/data/products/61/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/61/1.jpg', 'https://i.dummyjson.com/data/products/61/2.png', 'https://i.dummyjson.com/data/products/61/3.jpg'],
    slug: 'leather-straps-wristwatch',
    excerpt: 'Stay on time and on trend with our Leather Straps Wristwatch. Sporty and stylish for any occasion.',
    tags: ['Wristwatch', 'Leather Straps', 'Sport', 'Accessories'],
  },
  {
    title: 'Stainless Steel Wrist Watch',
    description: "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
    price: '47.000',
    category: 'mens-watches',
    thumbnail: 'https://i.dummyjson.com/data/products/65/thumbnail.webp',
    images: [
      'https://i.dummyjson.com/data/products/65/1.jpg',
      'https://i.dummyjson.com/data/products/65/2.webp',
      'https://i.dummyjson.com/data/products/65/3.jpg',
      'https://i.dummyjson.com/data/products/65/4.webp',
      'https://i.dummyjson.com/data/products/65/thumbnail.webp',
    ],
    slug: 'stainless-steel-wrist-watch',
    excerpt: "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
    tags: ['Stainless Steel', "Men's Watches"],
  },
  {
    title: 'Silver Ring Set Women',
    description: 'Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious',
    price: '70.000',
    category: 'womens-jewellery',
    thumbnail: 'https://i.dummyjson.com/data/products/76/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/76/1.jpg', 'https://i.dummyjson.com/data/products/76/2.jpg', 'https://i.dummyjson.com/data/products/76/thumbnail.jpg'],
    slug: 'silver-ring-set-women',
    excerpt: 'Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious',
    tags: ['Silver Ring', "Women's Jewellery"],
  },
  {
    title: 'Rose Ring',
    description: 'Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable',
    price: '10.000',
    category: 'womens-jewellery',
    thumbnail: 'https://i.dummyjson.com/data/products/77/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/77/1.jpg', 'https://i.dummyjson.com/data/products/77/2.jpg', 'https://i.dummyjson.com/data/products/77/3.jpg', 'https://i.dummyjson.com/data/products/77/thumbnail.jpg'],
    slug: 'rose-ring',
    excerpt: 'Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable',
    tags: ['Rose Ring', 'Adjustable Ring', "Women's Jewellery"],
  },
  {
    title: 'Rhinestone Korean Style Open Rings',
    description: 'Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women',
    price: '30.000',
    category: 'womens-jewellery',
    thumbnail: 'https://i.dummyjson.com/data/products/78/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/78/thumbnail.jpg'],
    slug: 'rhinestone-korean-style-open-rings',
    excerpt: 'Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women',
    tags: ['Adjustable Rings', 'Pearl Rings', "Women's Jewellery"],
  },
  {
    title: 'Elegant Female Pearl Earrings',
    description: 'Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set',
    price: '30.000',
    category: 'womens-jewellery',
    thumbnail: 'https://i.dummyjson.com/data/products/79/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/79/1.jpg'],
    slug: 'elegant-female-pearl-earrings',
    excerpt: 'Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set',
    tags: ['Earrings', 'Pearl Earrings', "Women's Jewellery"],
  },
  {
    title: 'Chain Pin Tassel Earrings',
    description: 'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    price: '45.000',
    category: 'womens-jewellery',
    thumbnail: 'https://i.dummyjson.com/data/products/80/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/80/1.jpg',
      'https://i.dummyjson.com/data/products/80/2.jpg',
      'https://i.dummyjson.com/data/products/80/3.png',
      'https://i.dummyjson.com/data/products/80/4.jpg',
      'https://i.dummyjson.com/data/products/80/thumbnail.jpg',
    ],
    slug: 'chain-pin-tassel-earrings',
    excerpt: 'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    tags: ['Chain Earrings', 'Tassel Earrings', "Women's Jewellery"],
  },
  {
    title: 'Steel Analog Couple Watches',
    description: 'Elegant design, Stylish ,Unique & Trendy,Comfortable wear',
    price: '35.000',
    category: 'womens-watches',
    thumbnail: 'https://i.dummyjson.com/data/products/66/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/66/1.jpg',
      'https://i.dummyjson.com/data/products/66/2.jpg',
      'https://i.dummyjson.com/data/products/66/3.jpg',
      'https://i.dummyjson.com/data/products/66/4.JPG',
      'https://i.dummyjson.com/data/products/66/thumbnail.jpg',
    ],
    slug: 'steel-analog-couple-watches',
    excerpt: 'Elegant design, Stylish ,Unique & Trendy,Comfortable wear',
    tags: ['Steel Analog Watches', 'Couple Watches', "Women's Watches"],
  },
  {
    title: 'Fashion Magnetic Wrist Watch',
    description: "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
    price: '60.000',
    category: 'womens-watches',
    thumbnail: 'https://i.dummyjson.com/data/products/67/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/67/1.jpg',
      'https://i.dummyjson.com/data/products/67/2.jpg',
      'https://i.dummyjson.com/data/products/67/3.jpg',
      'https://i.dummyjson.com/data/products/67/4.jpg',
      'https://i.dummyjson.com/data/products/67/thumbnail.jpg',
    ],
    slug: 'fashion-magnetic-wrist-watch',
    excerpt: "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
    tags: ['Magnetic Wrist Watch', "Women's Watches"],
  },
  {
    title: 'Stylish Luxury Digital Watch',
    description: 'Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls',
    price: '57.000',
    category: 'womens-watches',
    thumbnail: 'https://i.dummyjson.com/data/products/68/thumbnail.webp',
    images: ['https://i.dummyjson.com/data/products/68/1.jpg', 'https://i.dummyjson.com/data/products/68/2.jpg'],
    slug: 'stylish-luxury-digital-watch',
    excerpt: 'Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls',
    tags: ['Luxury Digital Watch', "Women's Watches"],
  },
  {
    title: 'Golden Watch Pearls Bracelet Watch',
    description: 'Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women',
    price: '47.000',
    category: 'womens-watches',
    thumbnail: 'https://i.dummyjson.com/data/products/69/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/69/1.jpg',
      'https://i.dummyjson.com/data/products/69/2.jpg',
      'https://i.dummyjson.com/data/products/69/3.webp',
      'https://i.dummyjson.com/data/products/69/4.jpg',
      'https://i.dummyjson.com/data/products/69/thumbnail.jpg',
    ],
    slug: 'golden-watch-pearls-bracelet-watch',
    excerpt: 'Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women',
    tags: ['Golden Watch', 'Pearls Bracelet Watch', "Women's Watches"],
  },
  {
    title: 'Stainless Steel Women',
    description: 'Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies',
    price: '35.000',
    category: 'womens-watches',
    thumbnail: 'https://i.dummyjson.com/data/products/70/1.jpg',
    images: ['https://i.dummyjson.com/data/products/70/1.jpg', 'https://i.dummyjson.com/data/products/70/2.jpg', 'https://i.dummyjson.com/data/products/70/thumbnail.jpg'],
    slug: 'stainless-steel-women',
    excerpt: 'Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies',
    tags: ['Stainless Steel', "Women's Watches"],
  },
];

if (!uri) {
  throw new Error('Connection string belum ada');
}

async function getMongoCLientInstance() {
  let client = new MongoClient(uri);
  await client.connect();
  const db = client.db('coreFash');

  // Menghapus semua dokumen di koleksi 'Products'
  const resultDelete = await db.collection('Products').deleteMany({});

  // Menyisipkan data ke koleksi 'Products'
  const resultInsert = await db.collection('Products').insertMany(
    data.map((el) => ({
      ...el,
      name: el.title,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))
  );

  // Menutup koneksi MongoDB
  await client.close();

  // Mengembalikan hasil operasi
  return {
    deleteResult: resultDelete,
    insertResult: resultInsert,
  };
}

// Menggunakan async/await untuk menangani hasil asinkron
async function execute() {
  try {
    const result = await getMongoCLientInstance();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Memanggil fungsi eksekusi
execute();
