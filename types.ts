// Navigation array used for rendering
export interface INavigation {
  name: string;
  href: string;
  current: boolean;
}

// Navigation Constants
export interface INavConstantsSingleItem {
  NAME: string;
  HREF: string;
}

// todo optimize 
export interface INavConstantsDetails {
  HERO: INavConstantsSingleItem;
  ABOUT: INavConstantsSingleItem;
  PROJECTS: INavConstantsSingleItem;
  CONTACT: INavConstantsSingleItem;
}

export interface IAuthorData {
    greeting: string;
    name: string;
    jobTitle: string;
    email: string;
    github: string;
    linkedIn: string;
}

export interface IProjectsData {
  name: string;
  tech: string;
  image: string;
  github: string;
  website?: string;
}

interface IYSingleSection {
  start: number, end: number
}

export interface IYOfSections {
  hero: IYSingleSection;
  about: IYSingleSection;
  projects: IYSingleSection;
  contact: IYSingleSection;
}
