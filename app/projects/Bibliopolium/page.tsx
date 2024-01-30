import React from 'react';
import { projectItems } from '../projectItems';
import { bibliopoliumData } from './bibliopoliumData';
import WebsitePreview from '../components/WebsitePreview';

export default async function Bibliopolium() {
  const projectInformation = projectItems.find(
    (project) => project.title === 'Bibliopolium'
  )!;

  return (
    <WebsitePreview
      projectInformation={projectInformation}
      projectData={bibliopoliumData}
    />
  );
}
