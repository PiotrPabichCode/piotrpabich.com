import React from 'react';
import { Navigation } from '../../components/nav';
import Image from 'next/image';
import { ProjectItem } from '../models/ProjectItem';
import { ProjectData } from '../models/ProjectData';
import YoutubeEmbed from './YoutubeEmbed';
import AppPreview from './AppPreview';
import { AppPreviewItem } from '../models/AppPreviewItem';
import Link from 'next/link';
import { Github } from 'lucide-react';
type Props = {
  projectInformation: ProjectItem;
  projectData: ProjectData[];
  projectPreview?: AppPreviewItem[];
};

export default async function WebsitePreview({
  projectInformation,
  projectData,
  projectPreview,
}: Props) {
  const ProjectMapper = () => {
    return projectData.map((item) => {
      if (item.url) {
        return (
          <div key={item.url}>
            <p className='text-4xl text-zinc-100 text-center mb-4'>
              {item.name}
            </p>
            <YoutubeEmbed url={item.url} />
          </div>
        );
      } else if (item.image) {
        return (
          <>
            <p className='text-4xl text-zinc-100 text-center'>{item.name}</p>
            <div>
              <Image src={item.image} alt={item.alt} />
            </div>
          </>
        );
      }
      return null;
    });
  };

  const TechStackMapper = () => {
    return projectInformation.techStack.map((library) => {
      return <p className='text-zinc-400'>✅{library}</p>;
    });
  };

  return (
    <div className='relative pb-16'>
      <Navigation />

      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='grid w-full grid-cols-1 lg:grid-cols-2'>
          <div className='max-w-2xl mx-auto mt-4'>
            <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
              {projectInformation.title}
            </h2>
            <p className='mt-4 text-zinc-400'>
              {projectInformation.description}
            </p>
          </div>
          <div className='max-w-2xl mx-auto mt-4 w-full'>
            <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>
              Tech Stack & Security
            </h2>
            <TechStackMapper />
          </div>
        </div>
        <div className='flex justify-center'>
          <Link
            href={projectInformation.repository}
            className='flex flex-row gap-2 items-center justify-center text-xl text-blue-400 hover:text-blue-700'>
            Repository <Github size={20} />
          </Link>
        </div>
        <div className='w-full h-px bg-zinc-800' />

        {projectPreview && (
          <>
            <AppPreview appPreviewItems={projectPreview} />
            <div className='w-full h-px bg-zinc-800' />
          </>
        )}

        {projectData && projectData.length > 0 && (
          <>
            <div className='grid w-full grid-cols-1 gap-8 items-center justify-center'>
              <ProjectMapper />
              <div className='flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 '></div>
            </div>
            <div className='hidden w-full h-px md:block bg-zinc-800' />
          </>
        )}

        <div className='grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3'>
          <div className='grid grid-cols-1 gap-4'></div>
          <div className='grid grid-cols-1 gap-4'></div>
          <div className='grid grid-cols-1 gap-4'></div>
        </div>
      </div>
    </div>
  );
}
