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
    <div className=' bg-gradient-to-tl from-black-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation />
      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='grid md:grid-cols-2 gap-4 max-w-screen-md mx-auto items-center'>
          <div className='flex flex-col items-center overflow-hidden'>
            <Image
              className='rounded mb-4'
              width={300}
              height={400}
              src={Me}
              alt='Piotr Pabich'
            />
            <p className='text-zinc-100 text-4xl'>Piotr Pabich</p>
            <p className='text-zinc-400 text-2xl'>Fullstack Developer</p>
          </div>
          <article className='flex flex-col items-center text-center leading-loose'>
            <h5 className='text-4xl text-zinc-100 text-center mb-4'>
              About me
            </h5>
            <p className='text-zinc-100 align-middle sm:mx-16 md:mx-0'>
              I am a people-oriented person who loves engaging with others. Ever
              since I was young, I have been involved in a sports club, which
              has taught me the importance of hard work and always giving my
              best. I thrive on challenges and have fantastic communication
              skills that allow me to connect effortlessly with people.
              Moreover, I'm incredibly adaptable and have a strong desire to
              learn, which helps me adapt quickly to new circumstances.
            </p>
          </article>
        </div>

        <Divider />
        <Skills />
        <div className='flex flex-col'>
          <h5 className='text-4xl text-zinc-100 text-center mb-4'>Skills</h5>
          <ul className='marker:text-zinc-100 text-zinc-100 font-normal list-outside list-disc ml-4'>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Spring Boot / Spring Security</li>
            <li>Selenium</li>
            <li>Jenkins</li>
            <li>Phabricator</li>
            <li>TortoiseHg</li>
          </ul>
        </div>
        <div className='grid lg:grid-cols-2 lg:gap-10'>
          <WorkTimeline />
          <EducationTimeline />
        </div>
      </div>
    </div>
  );
}
