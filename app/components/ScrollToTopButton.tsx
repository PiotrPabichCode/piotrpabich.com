'use client';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = typeof window !== 'undefined' ? window.scrollY : 0;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className={`z-20 fixed bottom-5 right-5 rounded-full p-3 bg-blue-700  hover:bg-blue-800`}>
        <ArrowUp className='size-8 md:size-10' color='white' />
      </button>
    )
  );
}
