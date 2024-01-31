import React from 'react';
import { projectItems } from '../projectItems';
import { BibliopoliumWebsitePreview } from './BibliopoliumWebsitePreview';
import AppPreview from '../components/AppPreview';

export default async function Bibliopolium() {
  const projectInformation = projectItems.find(
    (project) => project.title === 'Bibliopolium'
  )!;

  return (
    <AppPreview
      projectInformation={projectInformation}
      websitePreview={BibliopoliumWebsitePreview}
    />
  );
}
