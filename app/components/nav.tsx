'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? 'bg-zinc-900/0 border-transparent'
            : 'bg-zinc-900/500  border-zinc-800 '
        }`}
      >
        <div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
          <nav
            aria-label='Main navigation'
            className='flex justify-between gap-8'
          >
            {' '}
            {/* Added nav and aria-label */}
            <Link
              href='/about'
              className='duration-200 text-xl text-zinc-400 hover:text-zinc-100'
            >
              About
            </Link>
            <Link
              href='/projects'
              className='duration-200 text-xl text-zinc-400 hover:text-zinc-100'
            >
              Projects
            </Link>
            <Link
              href='/contact'
              className='duration-200 text-xl text-zinc-400 hover:text-zinc-100'
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => router.back()}
            className='duration-200 text-zinc-300 hover:text-zinc-100'
            aria-label='Go back to previous page' // Added aria-label for screen readers
            title='Go back to previous page' // Added title for hover text
          >
            <ArrowLeft className='w-6 h-6 ' aria-hidden='true' />{' '}
            {/* Added aria-hidden */}
          </button>
        </div>
      </div>
    </header>
  );
};
