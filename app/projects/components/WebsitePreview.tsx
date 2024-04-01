'use client';
import Image from 'next/image';
import { type WebsitePreviewItem } from '../models/WebsitePreviewItem';
import YoutubeEmbed from './YoutubeEmbed';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type Props = {
  websitePreviewItems?: WebsitePreviewItem[];
};

export default function WebsitePreview({ websitePreviewItems }: Props) {
  return (
    websitePreviewItems &&
    websitePreviewItems.length > 0 && (
      <div className='grid w-full grid-cols-1 gap-8 items-center justify-center'>
        {websitePreviewItems.map((item) => {
          if (item.url) {
            return (
              <div key={item.url}>
                <p className='text-4xl text-zinc-100 text-center mb-4'>
                  {item.name}
                </p>
                <YoutubeEmbed url={item.url} />
              </div>
            );
          } else if (item.image) {
            return (
              <div key={item.alt} className='items-center'>
                <p className='text-2xl lg:text-4xl mb-2 lg:mb-4 text-zinc-100 text-center'>
                  {item.name}
                </p>
                <div>
                  <Zoom>
                    <Image src={item.image} alt={item.alt} />
                  </Zoom>
                </div>
              </div>
            );
          }
          return null;
        })}
        <div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ' />
      </div>
    )
  );
}
