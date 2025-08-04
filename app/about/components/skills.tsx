import {
  AWS,
  Bash,
  C,
  CPP,
  CSharp,
  CSS,
  Docker,
  Git,
  GithubActions,
  Gitlab,
  Gradle,
  Grafana,
  HTML,
  Java,
  JavaScript,
  Jest,
  Kafka,
  Kotlin,
  Kubernetes,
  MongoDB,
  NestJS,
  NextJS,
  PHP,
  PostgreSQL,
  Prometheus,
  Python,
  React,
  Redis,
  Spring,
  TypeScript,
} from '../assets';
import IconSkill from './icon-skill';
import SkillsCard from './skills-card';

export default function Skills() {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:justify-items-center'>
      <SkillsCard title='Core Development'>
        <IconSkill image={Java} name='Java' alt='Java' />
        <IconSkill image={Kotlin} name='Kotlin' alt='Kotlin' />
        <IconSkill image={Spring} name='Spring' alt='Spring Framework' />
        <IconSkill image={NestJS} name='NestJS' alt='NestJS' />
        <IconSkill image={Kafka} name='Kafka' alt='Kafka' />
      </SkillsCard>

      <SkillsCard title='Testing & Observability'>
        <IconSkill image={Gradle} name='Spock' alt='Spock' />
        <IconSkill image={Java} name='JUnit' alt='JUnit' />
        <IconSkill image={Jest} name='Jest' alt='Jest' />
        <IconSkill image={AWS} name='OpenSearch' alt='OpenSearch' />
        <IconSkill image={Prometheus} name='Prometheus' alt='Prometheus' />
        <IconSkill image={Grafana} name='Grafana' alt='Grafana' />
      </SkillsCard>

      <SkillsCard title='Cloud & CI/CD'>
        <IconSkill image={Docker} name='Docker' alt='Docker' />
        <IconSkill image={Kubernetes} name='Kubernetes' alt='Kubernetes' />
        <IconSkill image={AWS} name='AWS stack' alt='AWS stack' />
        <IconSkill image={Git} name='Git' alt='Git' />
        <IconSkill
          image={Gitlab}
          name='Gitlab pipelines'
          alt='Gitlab pipelines'
        />
        <IconSkill
          image={GithubActions}
          name='Github actions'
          alt='Github actions'
        />
      </SkillsCard>

      <SkillsCard title='Data Management'>
        <IconSkill image={PostgreSQL} name='PostgreSQL' alt='PostgreSQL' />
        <IconSkill image={MongoDB} name='MongoDB' alt='MongoDB' />
        <IconSkill image={Redis} name='Redis' alt='Redis' />
      </SkillsCard>

      <SkillsCard title='Frontend'>
        <IconSkill image={HTML} name='HTML' alt='HTML' />
        <IconSkill image={CSS} name='CSS' alt='CSS' />
        <IconSkill image={JavaScript} name='JavaScript' alt='JavaScript' />
        <IconSkill image={TypeScript} name='TypeScript' alt='TypeScript' />
        <IconSkill image={React} name='React.js' alt='React.js' />
        <IconSkill image={NextJS} name='Next.js' alt='Next.js' />
      </SkillsCard>

      <SkillsCard title='Scripts / Studies / Hobby'>
        <IconSkill image={Python} name='Python' alt='Python' />
        <IconSkill image={Bash} name='Bash' alt='Bash' />
        <IconSkill image={CPP} name='C++' alt='C++' />
        <IconSkill image={C} name='C' alt='C' />
        <IconSkill image={CSharp} name='C#' alt='C#' />
        <IconSkill image={PHP} name='PHP' alt='PHP' />
      </SkillsCard>
    </div>
  );
}
