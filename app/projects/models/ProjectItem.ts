import { PLATFORM } from './Platform';

export type ProjectItem = {
  title: string;
  url: string;
  description: string;
  date: string;
  demoUrl?: string;
  repository?: string;
  frontendRepository?: string;
  backendRepository?: string;
  platform: PLATFORM;
  techStack: string[];
};
