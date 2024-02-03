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
  Selenium,
  Jest,
  Jenkins,
  Git,
  Firebase,
  C,
  CPP,
  PHP,
  CSharp,
  ExpressJS,
  Kotlin,
} from './assets';
import IconSkill from './components/IconSkill';

export default function Skills() {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-items-center'>
      <article className='w-full p-6 border border-gray-200 rounded-lg'>
        <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-100 text-center'>
          Frontend
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          <IconSkill image={HTML} name='HTML' alt='HTML' />
          <IconSkill image={CSS} name='CSS' alt='CSS' />
          <IconSkill image={JavaScript} name='JavaScript' alt='JavaScript' />
          <IconSkill image={TypeScript} name='TypeScript' alt='TypeScript' />
          <IconSkill image={React} name='React.js' alt='React.js' />
          <IconSkill image={React} name='React Native' alt='React Native' />
        </div>
      </article>
      <article className='w-full p-6 border border-gray-200 rounded-lg'>
        <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-100 text-center'>
          Backend
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          <IconSkill image={Java} name='Java' alt='Java' />
          <IconSkill image={Kotlin} name='Kotlin' alt='Kotlin' />
          <IconSkill image={Hibernate} name='Hibernate' alt='Hibernate' />
          <IconSkill image={Spring} name='Spring Boot' alt='Spring Boot' />
          <IconSkill
            image={Spring}
            name='Spring Security'
            alt='Spring Security'
          />
          <IconSkill image={ExpressJS} name='Express.js' alt='Express.js' />
        </div>
      </article>
      <article className='w-full p-6 border border-gray-200 rounded-lg'>
        <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-100 text-center'>
          Testing and CI / CD
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          <IconSkill image={Selenium} name='Selenium' alt='Selenium' />
          <IconSkill image={Jest} name='Jest' alt='Jest' />
          <IconSkill image={Java} name='JUnit' alt='JUnit' />
          <IconSkill image={Jenkins} name='Jenkins' alt='Jenkins' />
          <IconSkill image={Git} name='Git' alt='Git' />
        </div>
      </article>
      <article className='w-full p-6 border border-gray-200 rounded-lg'>
        <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-100 text-center'>
          Databases
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          <IconSkill image={MySQL} name='MySQL' alt='MySQL' />
          <IconSkill image={PostgreSQL} name='PostgreSQL' alt='PostgreSQL' />
          <IconSkill image={Firebase} name='Firestore' alt='Firestore' />
        </div>
      </article>
      <article className='w-full p-6 border border-gray-200 rounded-lg'>
        <h2 className='mb-2 text-2xl font-bold tracking-tight text-zinc-100 text-center'>
          Used in past
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          <IconSkill image={C} name='C' alt='C' />
          <IconSkill image={CPP} name='CPP' alt='CPP' />
          <IconSkill image={CSharp} name='CSharp' alt='CSharp' />
          <IconSkill image={PHP} name='PHP' alt='PHP' />
        </div>
      </article>
    </div>
  );
}
