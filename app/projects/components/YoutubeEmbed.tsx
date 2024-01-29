'use client';
import { useEffect, useState } from 'react';
import { MOBILE_HEIGHT, MOBILE_WIDTH } from '../constants';
import YoutubePlayer from 'react-player/youtube';
import { useInView } from 'react-intersection-observer';
import DeviceMockup from './DeviceMockup';

type Props = {
  url: string;
};

export default function YoutubeEmbed({ url }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    console.log(inView, isLoaded);
    if (inView) {
      setIsLoaded(true);

      if (isLoaded) {
        setIsPlaying(true);
      }
    } else if (!inView && isLoaded) {
      setIsPlaying(false);
    }
  }, [inView, isLoaded]);

  return (
    <DeviceMockup>
      <div ref={ref}>
        {inView || isLoaded ? (
          <YoutubePlayer
            width={MOBILE_WIDTH}
            height={MOBILE_HEIGHT}
            url={url}
            playing={isPlaying}
            muted
            loop
            disablePictureInPicture
          />
        ) : null}
      </div>
    </DeviceMockup>
  );
}
