import WorkItem from './work-item';

export default function WorkTimeline() {
  return (
    <div>
      <h2 className='text-2xl font-bold text-zinc-100 text-center mb-10'>
        Work Timeline
      </h2>
      <ol className='mb-4 relative border-s border-zinc-200'>
        <WorkItem
          timeline='June 2024 - Present | Software Engineer'
          companyName='Naviparking Sp. z o.o.'
          companyUrl='https://www.naviparking.com/'
          description='Delivering large-scale projects for enterprise clients, focusing on seamless integration with external Parking Management Systems (PMS) with zero downtime. Developing scalable, maintainable software services from the ground up, leveraging Spring Framework, Nest.js, and AWS, with containerized deployments using Kubernetes. Automated CI/CD pipelines using GitLab for efficient, reliable releases and collaborated in cross-functional, multi-lingual teams across Europe and the Middle East.'
          technologies={[
            'Java / Kotlin / TypeScript',
            'Spring Framework / Nest.js',
            'AWS (EC2, SQS, Lambda, S3, SES, MSK / Kafka)',
            'Kubernetes / Docker',
            'Microservices architecture',
            'CI / CD (Gitlab pipelines, ArgoCD)',
            'Integrations with external PMS (Parking Management Systems)',
            'Observability (Prometheus, Grafana, Micrometer, Slack, OpenSearch)',
            'PostgreSQL / MongoDB / Redis',
          ]}
        />
        <WorkItem
          timeline='July 2023 - October 2023 | Fullstack Java Developer'
          companyName='Firmao Polska Sp. z o.o. Łódź'
          companyUrl='https://firmao.pl/'
          description='Contributed to the enhancement of a cloud-based CRM/ERP platform by
            developing new features and optimizing modules for business process
            automation, invoicing, and project management. Supported the expansion
            of multilingual capabilities, including the integration of French language
            support to improve accessibility for international users'
          technologies={[
            'Java / TypeScript',
            'Spring Framework',
            'React.js / Next.js',
            'PostgreSQL / MongoDB',
            'Docker',
            'CI / CD (Jenkins)',
            'Internal CRM System',
            'AWS (SES, S3, SQS)',
          ]}
        />
      </ol>
    </div>
  );
}
