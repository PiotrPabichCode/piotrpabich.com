export default function WorkTimeline() {
  return (
    <div>
      <h2 className='text-4xl text-zinc-100 text-center mb-10'>
        Work Timeline
      </h2>
      <ol className='relative border-s border-gray-200'>
        <li className='mb-10 ms-4'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white'></div>
          <time className='mb-1 text-sm font-normal text-gray-400'>
            July 2023 - October 2023 (3 months) | Fullstack Java Developer
          </time>
          <h3 className='text-lg font-semibold text-zinc-100 '>
            Firmao Polska Sp. z o.o. Łódź
          </h3>
          <p className='mb-4 text-base font-normal text-gray-500'>
            I was involved in the development of a CRM system that facilitates
            easy business management in multiple languages. My primary
            responsibility was to support and enhance the system based on user
            requirements and needs. One of the major projects I worked on
            involved expanding the system to support the French language.
          </p>
          <h3 className='text-lg font-semibold text-zinc-100 '>Technologies</h3>
          <ul className='marker:text-zinc-500 text-zinc-500 font-normal list-outside list-disc ml-4'>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Spring Boot / Spring Security</li>
            <li>Selenium</li>
            <li>Jenkins</li>
            <li>Phabricator</li>
            <li>TortoiseHg</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
