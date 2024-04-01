import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import { ProjectItem } from './models/ProjectItem';

type Props = {
  projectItem: ProjectItem;
};

export const Article: React.FC<Props> = ({
  projectItem: {
    title,
    date,
    description,
    repository,
    frontendRepository,
    backendRepository,
    url,
  },
}) => {
  return (
    <Link href={`/projects/${url}`}>
      <article className='p-4 md:p-8'>
        <ArrowRight
          color='white'
          className='absolute right-5 top-5 hover:stroke-sky-500'
        />

        <div className='flex gap-1 items-center'>
          <span className='text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange'>
            {date}
            {' -'}
          </span>
          {repository && (
            <Link
              href={repository}
              className='flex items-center text-sky-500 hover:underline'>
              <Github color='white' className='hover:stroke-sky-500' />
            </Link>
          )}
          {backendRepository && (
            <Link
              href={backendRepository}
              className='flex items-center text-sky-500 hover:underline'>
              <Github color='white' className='hover:stroke-sky-500' />
            </Link>
          )}
          {frontendRepository && (
            <Link
              href={frontendRepository}
              className='flex items-center text-sky-500 hover:underline'>
              <Github color='white' className='hover:stroke-sky-500' />
            </Link>
          )}
        </div>
        <h2 className='z-20 text-2xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display'>
          {title}
        </h2>
        <p className='z-20 mt-4 text-md  duration-1000 text-zinc-400 group-hover:text-zinc-200'>
          {description}
        </p>
      </article>
    </Link>
  );
};
