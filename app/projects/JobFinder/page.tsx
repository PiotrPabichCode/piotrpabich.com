import React from 'react';
import { projectItems } from '../projectItems';
import AppPreview from '../components/AppPreview';
import { JobFinderMobileAppPreview } from './JobFinderMobileAppPreview';

export default async function JobFinder() {
  const projectInformation = projectItems.find(
    (project) => project.title === 'JobFinder'
  )!;

  return (
    <AppPreview
      projectInformation={projectInformation}
      mobileAppPreview={JobFinderMobileAppPreview}
    />
  );
}
