'use client';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  images: StaticImageData[];
};

export default function AppPreview({ images }: Props) {
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
          {images.map((image, id) => {
            return (
              <SwiperSlide
                key={'SmartSeniorPreview' + id}
                className='w-full items-center justify-center self-center'>
                <Image src={image} alt={`SmartSeniorPreview${id}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='hidden sm:grid grid-cols-5 justify-center gap-4'>
        {images.map((image, id) => {
          return (
            <Image
              src={image}
              alt={`SmartSeniorPreview${id}`}
              width={300}
              height={600}
            />
          );
        })}
      </div>
    </>
  );
}
