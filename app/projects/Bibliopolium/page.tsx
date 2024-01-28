import React from 'react';
import { Navigation } from '../../components/nav';
import Image from 'next/image';
import { projectItems } from '../projectItems';
import { bibliopoliumData } from './bibliopoliumData';

export default async function Bibliopolium() {
  const project = projectItems.find(
    (project) => project.title === 'Bibliopolium'
  )!;

  const ProjectMapper = () => {
    return bibliopoliumData.map((item) => {
      return (
        <>
          <p className='text-4xl text-zinc-100 text-center'>{item.name}</p>
          <div>
            <Image src={item.image} alt={item.alt} placeholder='blur' />
          </div>
        </>
      );
    });
  };
  return (
    <div className='relative pb-16'>
      <Navigation />
      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
            {project.title}
          </h2>
          <p className='mt-4 text-zinc-400'>{project.description}</p>
        </div>

        <div className='w-full h-px bg-zinc-800' />
        <div className='grid w-full grid-cols-1 gap-8 items-center justify-center'>
          <ProjectMapper />
          <div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 '></div>
        </div>
        <div className='hidden w-full h-px md:block bg-zinc-800' />

        <div className='grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3'>
          <div className='grid grid-cols-1 gap-4'></div>
          <div className='grid grid-cols-1 gap-4'></div>
          <div className='grid grid-cols-1 gap-4'></div>
        </div>
      </div>
    </div>
  );
}
