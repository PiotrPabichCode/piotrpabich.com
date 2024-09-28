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
  Kotlin,
  MongoDB,
  Docker,
  Grafana,
  Kubernetes,
  Kafka,
  AWS,
  Prometheus,
  Gradle,
  NestJS,
} from '../assets';
import IconSkill from './icon-skill';
import SkillsCard from './skills-card';

export default function Skills() {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-items-center'>
      <SkillsCard title='Frontend'>
        <IconSkill image={HTML} name='HTML' alt='HTML' />
        <IconSkill image={CSS} name='CSS' alt='CSS' />
        <IconSkill image={JavaScript} name='JavaScript' alt='JavaScript' />
        <IconSkill image={TypeScript} name='TypeScript' alt='TypeScript' />
        <IconSkill image={React} name='React.js' alt='React.js' />
        <IconSkill image={React} name='React Native' alt='React Native' />
      </SkillsCard>

      <SkillsCard title='Backend'>
        <IconSkill image={Java} name='Java' alt='Java' />
        <IconSkill image={Kotlin} name='Kotlin' alt='Kotlin' />
        <IconSkill image={Spring} name='Spring Boot' alt='Spring Boot' />
        <IconSkill
          image={Spring}
          name='Spring Security'
          alt='Spring Security'
        />
        <IconSkill image={Hibernate} name='Hibernate' alt='Hibernate' />
        <IconSkill image={NestJS} name='NestJS' alt='NestJS' />
      </SkillsCard>

      <SkillsCard title='DevOps & CI/CD'>
        <IconSkill image={Docker} name='Docker' alt='Docker' />
        <IconSkill image={Kubernetes} name='Kubernetes' alt='Kubernetes' />
        <IconSkill image={Prometheus} name='Prometheus' alt='Prometheus' />
        <IconSkill image={AWS} name='AWS' alt='AWS' />
        <IconSkill image={Git} name='Git' alt='Git' />
        <IconSkill image={Jenkins} name='Jenkins' alt='Jenkins' />
      </SkillsCard>

      <SkillsCard title='Testing & Monitoring'>
        <IconSkill image={Grafana} name='Grafana' alt='Grafana' />
        <IconSkill image={Gradle} name='Spock' alt='Spock' />
        <IconSkill image={Kafka} name='Kafka' alt='Kafka' />
        <IconSkill image={Java} name='JUnit' alt='JUnit' />
        <IconSkill image={Selenium} name='Selenium' alt='Selenium' />
        <IconSkill image={Jest} name='Jest' alt='Jest' />
      </SkillsCard>

      <SkillsCard title='Databases'>
        <IconSkill image={MySQL} name='MySQL' alt='MySQL' />
        <IconSkill image={PostgreSQL} name='PostgreSQL' alt='PostgreSQL' />
        <IconSkill image={MongoDB} name='MongoDB' alt='MongoDB' />
        <IconSkill image={Firebase} name='Firestore' alt='Firestore' />
      </SkillsCard>

      <SkillsCard title='Used in past'>
        <IconSkill image={C} name='C' alt='C' />
        <IconSkill image={CPP} name='C++' alt='C++' />
        <IconSkill image={CSharp} name='C#' alt='C#' />
        <IconSkill image={PHP} name='PHP' alt='PHP' />
      </SkillsCard>
    </div>
  );
}
