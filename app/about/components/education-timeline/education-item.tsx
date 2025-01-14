type EducationItemProps = {
  timeline: string;
  title: string;
  details: string[];
};

export const DetailsMapper = ({ details }: { details: string[] }) => {
  return (
    <h2 className='mb-4 text-base font-normal text-zinc-400'>
      {details.map((detail, index) => (
        <span key={index}>
          {detail}
          {index < details.length - 1 && <br />}
        </span>
      ))}
    </h2>
  );
};

export default function EducationItem({
  timeline,
  title,
  details,
}: EducationItemProps) {
  return (
    <ol className='pb-1 relative border-s border-zinc-200'>
      <li className='ms-4'>
        <div className='absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5 border border-white'></div>
        <time className='mb-1 text-sm font-normal leading-none text-zinc-400'>
          {timeline}
        </time>
        <h2 className='text-lg font-semibold text-zinc-100 '>{title}</h2>
        <DetailsMapper details={details} />
      </li>
    </ol>
  );
}
