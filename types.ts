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
  POSITION_Y_START: number;
  POSITION_Y_END?: number;
}

// todo optimize 
export interface INavConstantsDetails {
  TOP: INavConstantsSingleItem;
  ABOUT: INavConstantsSingleItem;
  PROJECTS: INavConstantsSingleItem;
  CONTACT: INavConstantsSingleItem;
}

export interface IHomeData {
    greeting: string;
    name: string;
    jobTitle: string;
}

export interface IProjectsData {
  name: string;
  tech: string;
  image: string;
  github: string;
  website?: string;
}

// animation variants
export interface INavVariants {
    hidden: {
        width: number 
    },
    visible:{
        width: string
    },
    transition: {
        ease: string
    }
}