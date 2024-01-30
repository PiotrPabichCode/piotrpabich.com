import { StaticImageData } from 'next/image';

export type ProjectData = {
  name: string;
  image?: StaticImageData;
  url?: string;
  alt: string;
};
