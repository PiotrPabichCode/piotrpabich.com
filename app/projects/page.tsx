import React from 'react';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import { Article } from './article';
import Image from 'next/image';
import { projectItems } from './projectItems';

export const revalidate = 60;
export default async function ProjectsPage() {
  const ProjectsList = () => {
    return projectItems.map((project) => (
      <Card>
        <Article key={project.title} projectItem={project} />
      </Card>
    ));
  };

  return (
    <div className='relative pb-16'>
      <Navigation />
      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
            Projects
          </h2>
          <p className='mt-4 text-zinc-400'>
            Some of the projects are from work and some are on my own time.
          </p>
        </div>

        <div className='w-full h-px bg-zinc-800' />
        <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2'>
          <ProjectsList />
          {/* <iframe
            width='267'
            height='506'
            src='https://www.youtube.com/embed/1x6y-Rdf1fY'
          /> */}
          {/* <video
            className='phone-video'
            autoPlay={true}
            muted={true}
            width='267'
            height='506'
            poster='https://plaid.com/assets/img/phones/screen1.png'
            loop={true}
            controls={true}
            src={require('./medicines.mp4')}
          /> */}
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
