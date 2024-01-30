import React from 'react';
import { projectItems } from '../projectItems';
import { smartSeniorData } from './smartSeniorData';
import WebsitePreview from '../components/WebsitePreview';

export default async function SmartSenior() {
  const projectInformation = projectItems.find(
    (project) => project.title === 'SmartSenior'
  )!;

  return (
    <WebsitePreview
      projectInformation={projectInformation}
      projectData={smartSeniorData}
    />
  );
}