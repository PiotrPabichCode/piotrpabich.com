'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AppPreviewItem } from '../models/AppPreviewItem';

type Props = {
  appPreviewItems: AppPreviewItem[];
};

export default function AppPreview({ appPreviewItems }: Props) {
  return (
    <>
      <div className='flex sm:hidden items-center justify-center w-full'>
        <Swiper
          grabCursor
          autoplay
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}>
          {appPreviewItems.map((item, id) => {
            return (
              <SwiperSlide
                key={`AppPreviewSlide${id}`}
                className='w-full items-center justify-center self-center'>
                <Image
                  key={`AppPreviewImage${id}`}
                  src={item.image}
                  alt={item.alt}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='hidden sm:grid grid-cols-5 justify-center gap-4'>
        {appPreviewItems.map((item) => {
          return (
            <Image
              key={`${item.alt} - Image`}
              src={item.image}
              alt={`${item.alt} - Image`}
              width={300}
              height={600}
            />
          );
        })}
      </div>
    </>
  );
}
