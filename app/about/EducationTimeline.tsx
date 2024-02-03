export default function EducationTimeline() {
  return (
    <div>
      <h2 className='text-4xl text-zinc-100 text-center mb-10'>
        Education Timeline
      </h2>
      <ol className='relative border-s border-zinc-200'>
        <li className='mb-10 ms-4'>
          <div className='absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white'></div>
          <time className='mb-1 text-sm font-normal leading-none text-zinc-400'>
            October 2020 - February 2024
          </time>
          <h2 className='text-lg font-semibold text-zinc-100 '>
            Lodz University of Technology
          </h2>
          <h2 className='mb-4 text-base font-normal text-zinc-400'>
            Faculty of Electrical, Electronic, Computer and Control Engineering
            <br />
            Major: Computer Science <br />
            Specialization: Internet Technologies
            <br />
            Degree: Bachelor of Science in Engineering
          </h2>
        </li>
      </ol>
    </div>
  );
}
