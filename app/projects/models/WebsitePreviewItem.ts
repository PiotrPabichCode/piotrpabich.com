import { StaticImageData } from 'next/image';

export type WebsitePreviewItem = {
  name: string;
  image?: StaticImageData;
  url?: string;
  alt: string;
};
