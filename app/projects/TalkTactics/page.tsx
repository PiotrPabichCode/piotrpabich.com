import React from 'react';
import { projectItems } from '../projectItems';
import { TalkTacticsData } from './TalkTacticsData';
import AppPreview from '../components/AppPreview';

export default async function TalkTactics() {
  const projectInformation = projectItems.find(
    (project) => project.title === 'TalkTactics'
  )!;

  return (
    <AppPreview
      projectInformation={projectInformation}
      websitePreview={TalkTacticsData}
    />
  );
}
