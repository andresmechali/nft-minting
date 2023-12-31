import { Image } from "sanity";

export interface Creator {
  _id: string;
  name: string;
  address: string;
  bio: string;
  slug: {
    current: string;
  };
  image: Image;
}

export interface Collection {
  _id: string;
  title: string;
  description: string;
  nftCollectionName: string;
  address: string;
  slug: {
    current: string;
  };
  creator: Creator;
  mainImage: Image;
  previewImage: Image;
}
