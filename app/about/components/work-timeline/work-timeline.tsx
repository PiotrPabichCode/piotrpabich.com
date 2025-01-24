import WorkItem from './work-item';

export default function WorkTimeline() {
  return (
    <div>
      <h2 className='text-2xl font-bold text-zinc-100 text-center mb-10'>
        Work Timeline
      </h2>
      <ol className='mb-4 relative border-s border-zinc-200'>
        <WorkItem
          timeline='July 2023 - October 2023 | Fullstack Java Developer'
          companyName='Firmao Polska Sp. z o.o. Łódź'
          description='I was involved in the development of a CRM system that facilitates
            easy business management in multiple languages. My primary
            responsibility was to support and enhance the system based on user
            requirements and needs. One of the major projects I worked on
            involved expanding the system to support the French language.'
          technologies={[
            'JavaScript',
            'Java',
            'Spring Boot / Spring Security',
            'Selenium',
            'Jenkins',
            'Phabricator',
            'TortoiseHg',
          ]}
        />
      </ol>
    </div>
  );
}
