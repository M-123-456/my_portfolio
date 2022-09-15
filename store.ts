import { Dispatch, SetStateAction } from 'react';

import create from 'zustand';

import { Inavigation } from './types';

const initialNav: Inavigation[] = [
  { name: "Top", href: "#Top", current: false },
  { name: "About", href: "#About", current: false },
  { name: "Projects", href: "#Projects", current: false },
  { name: "Contact", href: "#Contact", current: false },
]

interface useStoreState {
    navigation: Inavigation[];
    updateNavCurrent: (name: string) => void;
}

export const useStore = create<useStoreState>((set) => ({
    navigation: initialNav,
    updateNavCurrent: (name) => {
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
    }
})) 