import React from 'react';
import { Navigation } from '@/app/components/nav';
import Divider from '@/app/components/divider';
import { ProjectItem } from '../models/ProjectItem';
import { WebsitePreviewItem } from '../models/WebsitePreviewItem';
import MobileAppPreview from './MobileAppPreview';
import { MobileAppPreviewItem } from '../models/MobileAppPreviewItem';
import Link from 'next/link';
import { Github, Globe } from 'lucide-react';
import WebsitePreview from './WebsitePreview';
import Head from 'next/head';
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
    <>
      <Head>
        <meta
          name='title'
          content={`${projectInformation.title} Piotr Pabich Software Engineer`}
        />
        <meta
          name='description'
          content={`${projectInformation.description} Piotr Pabich Software Engineer`}
        />
      </Head>
      <div className='relative pb-4 lg:pb-16'>
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
          <div className='flex justify-center gap-4'>
            {projectInformation.backendRepository && (
              <Link
                href={projectInformation.backendRepository}
                className='flex flex-row gap-2 items-center justify-center text-xl text-blue-400 hover:text-blue-700'
              >
                Backend <Github size={20} />
              </Link>
            )}
            {projectInformation.demoUrl && (
              <Link
                href={projectInformation.demoUrl}
                className='flex flex-row gap-2 items-center justify-center text-xl text-blue-400 hover:text-blue-700'
              >
                Demo <Globe size={20} />
              </Link>
            )}
            {projectInformation.frontendRepository && (
              <Link
                href={projectInformation.frontendRepository}
                className='flex flex-row gap-2 items-center justify-center text-xl text-blue-400 hover:text-blue-700'
              >
                Frontend <Github size={20} />
              </Link>
            )}
            {projectInformation.repository && (
              <Link
                href={projectInformation.repository}
                className='flex flex-row gap-2 items-center justify-center text-xl text-blue-400 hover:text-blue-700'
              >
                Repository <Github size={20} />
              </Link>
            )}
          </div>
          <Divider />

          <MobileAppPreview mobileAppPreviewItems={mobileAppPreview} />
          <WebsitePreview
            key={'websitePreview' + projectInformation.title}
            websitePreviewItems={websitePreview}
          />
        </div>
      </div>
    </>
  );
}
