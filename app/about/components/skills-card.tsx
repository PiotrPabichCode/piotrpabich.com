export default function SkillsCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className='w-full p-6 border border-gray-200 rounded-lg'>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-100 text-center'>
        {title}
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>{children}</div>
    </article>
  );
}
