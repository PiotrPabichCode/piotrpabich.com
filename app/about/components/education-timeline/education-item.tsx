type EducationItemProps = {
  timeline: string;
  title: string;
  titleUrl: string;
  details: string[];
};

export const DetailsMapper = ({ details }: { details: string[] }) => {
  return (
    <h4 className='mb-4 text-base font-normal text-zinc-400'>
      {details.map((detail, index) => (
        <span key={index}>
          {detail}
          {index < details.length - 1 && <br />}
        </span>
      ))}
    </h4>
  );
};

export default function EducationItem({
  timeline,
  title,
  titleUrl,
  details,
}: EducationItemProps) {
  return (
    <li className='mt-8 ms-4'>
      <div className='absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white'></div>
      <time className='mb-1 text-sm font-normal text-zinc-400'>{timeline}</time>
      <h3 className='text-lg font-semibold text-zinc-100 '>
        <a
          href={titleUrl}
          target='_blank'
          rel='noopener noreferrer'
          title={`Learn more about ${title}`}
          className='hover:underline'
        >
          {title}
        </a>
      </h3>
      <DetailsMapper details={details} />
    </li>
  );
}
