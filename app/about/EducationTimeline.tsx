export default function EducationTimeline() {
  return (
    <div>
      <h2 className='text-4xl text-zinc-100 text-center mb-10'>
        Education Timeline
      </h2>
      <ol className='relative border-s border-gray-200 dark:border-gray-700'>
        <li className='mb-10 ms-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            October 2020 - February 2024
          </time>
          <h3 className='text-lg font-semibold text-zinc-100 '>
            Lodz University of Technology
          </h3>
          <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
            Faculty of Electrical, Electronic, Computer and Control Engineering
            <br />
            Major: Computer Science <br />
            Specialization: Internet Technologies
            <br />
            Degree: Bachelor of Science in Engineering
          </p>
        </li>
      </ol>
    </div>
  );
}
