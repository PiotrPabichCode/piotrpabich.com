import React from 'react';
import { projectItems } from '../projectItems';
import { jobFinderData } from './jobFinderData';
import WebsitePreview from '../components/WebsitePreview';

export default async function JobFinder() {
  const projectInformation = projectItems.find(
    (project) => project.title === 'JobFinder'
  )!;

  return (
    <WebsitePreview
      projectInformation={projectInformation}
      projectData={jobFinderData}
    />
  );
}
