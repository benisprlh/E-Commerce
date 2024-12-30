export interface UserModelCreateInput {
  name?: string;
  username: string;
  email: string;
  password: string;
}

export interface ProductModelOutput {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface myWishListType {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  myWishLists: [];
  myProducts: [];
}
