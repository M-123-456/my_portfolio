import create from 'zustand';

// Constants
import { NAVIGATION } from './data/constants';

// Types
import { INavigation, IYPages } from './types';



const initialYPages: IYPages = {
  TOP: { start: 0, end: 555},
  ABOUT: {start: 556, end: 1127},
  PROJECTS: {start: 1128, end: 1883},
  CONTACT: {start: 1884, end: 2454},
}

const initialNav: INavigation[] = [
  { 
    name: NAVIGATION.TOP.NAME, 
    href: NAVIGATION.TOP.HREF, 
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
    yOfPages: IYPages;
    setYOfPage: (name:string, start: number|undefined, end:number|undefined) => void;
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
    yOfPages: initialYPages,
    setYOfPage: (name, start, end) => {
        set((state) => ({
            yOfPages: {
                ...state.yOfPages,
                [name]: {
                    start: start,
                    end: end
                }
            }
        }))
    }
})) 