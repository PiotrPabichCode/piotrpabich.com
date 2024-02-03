import {
  React,
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  Spring,
  MySQL,
  PostgreSQL,
  Java,
  Hibernate,
} from './assets';
import IconSkill from './components/IconSkill';

export default function Skills() {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-items-center'>
      <article className='block max-w-sm p-6 border border-gray-200 rounded-lg shadow overflow-hidden'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-zinc-100 text-center'>
          Frontend
        </h5>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 text-zinc-400'>
          <IconSkill image={HTML} name='HTML' alt='HTML' />
          <IconSkill image={CSS} name='CSS' alt='CSS' />
          <IconSkill image={JavaScript} name='JavaScript' alt='JavaScript' />
          <IconSkill image={TypeScript} name='TypeScript' alt='TypeScript' />
          <IconSkill image={React} name='React.js' alt='React.js' />
          <IconSkill image={React} name='React Native' alt='React Native' />
        </div>
      </article>
      <article className='block max-w-sm p-6 border border-gray-200 rounded-lg shadow overflow-hidden'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-zinc-100 text-center'>
          Backend
        </h5>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 text-zinc-400'>
          <IconSkill image={Java} name='Java' alt='Java' />
          <IconSkill image={Hibernate} name='Hibernate' alt='Hibernate' />
          <IconSkill image={Spring} name='Spring Boot' alt='Spring Boot' />
          <IconSkill
            image={Spring}
            name='Spring Security'
            alt='Spring Security'
          />
          <IconSkill image={MySQL} name='MySQL' alt='MySQL' />
          <IconSkill image={PostgreSQL} name='PostgreSQL' alt='PostgreSQL' />
        </div>
      </article>
      <article className='block max-w-sm p-6 border border-gray-200 rounded-lg shadow overflow-hidden'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-zinc-100 text-center'>
          Testing
        </h5>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 text-zinc-400'>
          <IconSkill image={Java} name='Java' alt='Java' />
          <IconSkill image={Hibernate} name='Hibernate' alt='Hibernate' />
          <IconSkill image={Spring} name='Spring Boot' alt='Spring Boot' />
          <IconSkill
            image={Spring}
            name='Spring Security'
            alt='Spring Security'
          />
          <IconSkill image={MySQL} name='MySQL' alt='MySQL' />
          <IconSkill image={PostgreSQL} name='PostgreSQL' alt='PostgreSQL' />
        </div>
      </article>
    </div>
  );
}
