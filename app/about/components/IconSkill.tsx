import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type IconSkillProps = {
  image: StaticImport;
  name: string;
  alt: string;
};

export default function IconSkill({ image, name, alt }: IconSkillProps) {
  return (
    <div className='flex flex-col items-center p-2 gap-1'>
      <Image src={image} alt={alt} width={24} height={24} />
      <p className='text-center text-zinc-400'>{name}</p>
    </div>
  );
}
