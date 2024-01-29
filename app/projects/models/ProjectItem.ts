import { PLATFORM } from './Platform';

export type ProjectItem = {
  title: string;
  url: string;
  description: string;
  date: string;
  repository: string;
  platform: PLATFORM;
  techStack: string[];
};
