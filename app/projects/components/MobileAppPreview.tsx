'use client';
import Image from 'next/image';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Zoom from 'react-medium-image-zoom';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { type MobileAppPreviewItem } from '../models/MobileAppPreviewItem';
import { useCallback, useRef, useState } from 'react';

type Props = {
  mobileAppPreviewItems?: MobileAppPreviewItem[];
};

export default function MobileAppPreview({ mobileAppPreviewItems }: Props) {
  const [isZoomed, setIsZoomed] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom);
    if (shouldZoom) {
      swiperRef.current?.swiper.autoplay.pause();
    } else {
      swiperRef.current?.swiper.autoplay.resume();
    }
  }, []);

  return (
    mobileAppPreviewItems && (
      <>
        <div className='flex sm:hidden items-center justify-center'>
          <Swiper
            ref={swiperRef}
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
                  <ControlledZoom
                    isZoomed={isZoomed}
                    onZoomChange={handleZoomChange}
                    key={`AppPreviewImage${id}`}>
                    <Image src={item.image} alt={item.alt} />
                  </ControlledZoom>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className='hidden sm:grid grid-cols-5 justify-center gap-4'>
          {mobileAppPreviewItems.map((item, id) => {
            return (
              <Zoom key={`${item.alt} - Image`}>
                <Image
                  priority={!id}
                  src={item.image}
                  alt={`${item.alt} - Image`}
                  width={300}
                  height={600}
                />
              </Zoom>
            );
          })}
        </div>
      </>
    )
  );
}
