'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { type MobileAppPreviewItem } from '../models/MobileAppPreviewItem';

type Props = {
  mobileAppPreviewItems?: MobileAppPreviewItem[];
};

export default function MobileAppPreview({ mobileAppPreviewItems }: Props) {
  return (
    mobileAppPreviewItems && (
      <>
        <div className='flex sm:hidden items-center justify-center w-full'>
          <Swiper
            grabCursor
            autoplay
            loop
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}>
            {mobileAppPreviewItems.map((item, id) => {
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
          {mobileAppPreviewItems.map((item) => {
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
    )
  );
}
