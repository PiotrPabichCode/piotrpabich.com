import React from 'react';
import { projectItems } from '../projectItems';
import { talkTacticsData } from './talkTacticsData';
import WebsitePreview from '../components/WebsitePreview';

export default async function TalkTactics() {
  const projectInformation = projectItems.find(
    (project) => project.title === 'TalkTactics'
  )!;

  return (
    <WebsitePreview
      projectInformation={projectInformation}
      projectData={talkTacticsData}
    />
  );
}
