import React from 'react';
import { projectItems } from '../projectItems';
import AppPreview from '../components/AppPreview';
import { SmartSeniorAppPreview } from './SmartSeniorMobileAppPreview';

export default async function SmartSenior() {
  const projectInformation = projectItems.find(
    (project) => project.title === 'SmartSenior'
  )!;

  return (
    <AppPreview
      projectInformation={projectInformation}
      mobileAppPreview={SmartSeniorAppPreview}
    />
  );
}
