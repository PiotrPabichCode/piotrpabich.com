import React from 'react';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import { Article } from './article';
import { projectItems } from './projectItems';
import Divider from '../components/divider';

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
    <div className='relative'>
      <Navigation />
      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
            Projects
          </h2>
          <p className='mt-4 text-zinc-400'>
            Check out projects I've worked on during my own time.
          </p>
        </div>

        <Divider />
        <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2'>
          <ProjectsList />
          <div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 '></div>
        </div>
      </div>
    </div>
  );
}
