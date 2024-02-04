'use client';
import { Navigation } from '../components/nav';
import Image from 'next/image';
import Me from './assets/me.webp';
import WorkTimeline from './WorkTimeline';
import EducationTimeline from './EducationTimeline';
import Divider from '../components/Divider';
import Skills from './Skills';

export default function About() {
  return (
    <div className='bg-gradient-to-tl from-black-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation />
      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='grid md:grid-cols-2 gap-4 max-w-screen-md mx-auto items-center'>
          <div className='flex flex-col items-center overflow-hidden'>
            <Image
              priority
              className='rounded mb-4'
              width={300}
              src={Me}
              alt='Piotr Pabich'
            />
            <h1 className='text-zinc-100 text-4xl'>Piotr Pabich</h1>
            <h2 className='text-zinc-400 text-2xl'>Fullstack Developer</h2>
          </div>
          <article className='flex flex-col items-center text-center leading-loose'>
            <h2 className='text-2xl font-bold text-zinc-100 text-center mb-4'>
              About me
            </h2>
            <p className='text-zinc-100 align-middle sm:mx-16 md:mx-0'>
              As a people-oriented Fullstack Developer, I bring not only
              technical expertise but also a strong focus on collaboration and
              effective communication. Building positive relationships is at the
              core of my approach, creating a harmonious and enjoyable work
              atmosphere.
            </p>
          </article>
        </div>

        <Divider />
        <Skills />
        <div className='grid lg:grid-cols-2 lg:gap-10'>
          <WorkTimeline />
          <EducationTimeline />
        </div>
      </div>
    </div>
  );
}
