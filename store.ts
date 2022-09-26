import create from 'zustand';

// Constants
import { NAVIGATION } from './data/constants';

// Types
import { INavigation, IYOfSections } from './types';



const initialYSections: IYOfSections = {
  hero: { start: 0, end: 555},
  about: {start: 556, end: 1127},
  projects: {start: 1128, end: 1883},
  contact: {start: 1884, end: 2454},
}

const initialNav: INavigation[] = [
  { 
    name: NAVIGATION.HERO.NAME, 
    href: NAVIGATION.HERO.HREF, 
    current: false,
  },
  { 
    name: NAVIGATION.ABOUT.NAME, 
    href: NAVIGATION.ABOUT.HREF, 
    current: false,
  },
  { 
    name: NAVIGATION.PROJECTS.NAME, 
    href: NAVIGATION.PROJECTS.HREF, 
    current: false,
  },
  { 
    name: NAVIGATION.CONTACT.NAME, 
    href: NAVIGATION.CONTACT.HREF, 
    current: false,
  },
]

interface useStoreState {
    scrollY: number;
    setScrollY: () => void;
    navigation: INavigation[];
    setNavCurrent: (name: string) => void;
    yOfSections: IYOfSections;
    setYOfSection: (name:string, start: number|undefined, end:number|undefined) => void;
}

export const useStore = create<useStoreState>((set) => ({
    scrollY: 0,
    setScrollY: () => {
        set((state) => ({
            scrollY: window.scrollY
        }))
    },
    navigation: initialNav,
    setNavCurrent: (name) => {
        set((state) => {
            const _navigation = state.navigation.map(navItem => {
                if (name === navItem.name) {
                    return {
                        ...navItem,
                        current: true
                    }
                } else {
                    return {
                        ...navItem,
                        current: false
                    }
                }
            });
            return {
                navigation: _navigation
            }
        })
    },
    yOfSections: initialYSections,
    setYOfSection: (name, start, end) => {
        set((state) => ({
            yOfSections: {
                ...state.yOfSections,
                [name]: {
                    start: start,
                    end: end! - 1
                }
            }
        }))
    }
})) 