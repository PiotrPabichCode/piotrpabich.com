type WorkItemProps = {
  timeline: string;
  companyName: string;
  description: string;
  technologies: string[];
};

export const TechnologiesMapper = ({
  technologies,
}: {
  technologies: string[];
}) => {
  return (
    <>
      <h3 className='text-lg font-semibold text-zinc-100 '>Technologies</h3>
      <ul className='marker:text-zinc-400 text-zinc-400 font-normal list-outside list-disc ml-4'>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </>
  );
};

export default function WorkItem({
  timeline,
  companyName,
  description,
  technologies,
}: WorkItemProps) {
  return (
    <li className='mt-8 ms-4'>
      <div className='absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white'></div>
      <time className='mb-1 text-sm font-normal text-zinc-400'>{timeline}</time>
      <h3 className='text-lg font-semibold text-zinc-100 '>{companyName}</h3>
      <p className='mb-4 text-base font-normal text-zinc-400'>{description}</p>
      <TechnologiesMapper technologies={technologies} />
    </li>
  );
}
