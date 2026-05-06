export type Teacher = {
  id: number;
  name: string;
  bio: string;
  experience: number;
  photo?: StrapiMedia[];
};

export type Price = {
  id: number;
  title: string;
  price: number;
  duration: string;
  description: string;
  isAvailable: boolean;
  isGroup?: boolean;
};

export type Video = {
  id: number;
  title: string;
  youtubeUrl: string;
  description?: string;
};

export type Review = {
  id: number;
  studentName: string;
  text: string;
  rating: number;
};

export type StrapiMedia = {
  id: number;
  url: string;
  name: string;
  mime: string;
};

export type Photo = {
  id: number;
  caption?: string;
  image?: StrapiMedia[];
};

export type Promo = {
  title: string;
  classes: number;
  totalPrice: number;
  pricePerClass: number;
  description: string;
  tagline: string;
  image?: StrapiMedia;
  isActive: boolean;
};
