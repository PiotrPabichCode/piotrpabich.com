import React from 'react';
import { Navigation } from '../../components/nav';
import { ProjectItem } from '../models/ProjectItem';
import { WebsitePreviewItem } from '../models/WebsitePreviewItem';
import MobileAppPreview from './MobileAppPreview';
import { MobileAppPreviewItem } from '../models/MobileAppPreviewItem';
import Link from 'next/link';
import { Github } from 'lucide-react';
import Divider from '@/app/components/Divider';
import WebsitePreview from './WebsitePreview';
type Props = {
  projectInformation: ProjectItem;
  websitePreview?: WebsitePreviewItem[];
  mobileAppPreview?: MobileAppPreviewItem[];
};

export default async function AppPreview({
  projectInformation,
  websitePreview,
  mobileAppPreview,
}: Props) {
  const TechStackMapper = () => {
    return projectInformation.techStack.map((library) => {
      return <p className='text-zinc-400'>✅{library}</p>;
    });
  };

  return (
    <div className='relative'>
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
        <Divider />

        <MobileAppPreview mobileAppPreviewItems={mobileAppPreview} />
        <WebsitePreview
          key={'websitePreview' + projectInformation.title}
          websitePreviewItems={websitePreview}
        />
      </div>
    </div>
  );
}
