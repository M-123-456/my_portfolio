import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Context
import { useStore } from '../../../store';

// Constants
import { NAVIGATION } from '../../../data/constants';

// utils
import { classNames } from '../../../utils/classNames';

// Types
import { INavigation, IYOfSections } from '../../../types';


type Props = {
    item: INavigation;
}

const SingleLinkItem: React.FC<Props> = ({ item }) => {
  
  const router = useRouter();

  const setNavCurrent = useStore(state => state.setNavCurrent);
  const scrollY = useStore(state => state.scrollY);
  const navigation = useStore(state => state.navigation);
  const yPages = useStore(state => state.yOfSections);


  // Everytime a section is selected, set current in navigation true. If not selected, set it to false. This state is used for the style to show the current section user is watching.
  useEffect(() => {
    if (router?.asPath === `/#${item.name}`) {
      setNavCurrent(item.name)
    }
  }, [router]);

  // Set current in navigation depending on scrolling position
  useEffect(() => {
    let current = "";
    if(scrollY >= yPages.hero.start && scrollY < yPages.hero.end) {
      current = NAVIGATION.HERO.NAME
    } else if (scrollY >= yPages.about.start && scrollY < yPages.about.end) {
      current = NAVIGATION.ABOUT.NAME
    } else if (scrollY >= yPages.projects.start && scrollY < yPages.projects.end) {
      current = NAVIGATION.PROJECTS.NAME
    } else if (scrollY >= yPages.contact.start) {
      current = NAVIGATION.CONTACT.NAME
    }
    setNavCurrent(current);
  }, [scrollY]);

  const onClickScrollToPage = (yPages: IYOfSections, item: INavigation) => {
    switch(item.name) {
      case NAVIGATION.HERO.NAME:
        document.documentElement.scrollTop = yPages.hero.start;
        break;
      case NAVIGATION.ABOUT.NAME:
        document.documentElement.scrollTop = yPages.about.start;
        break;
      case NAVIGATION.PROJECTS.NAME:
        document.documentElement.scrollTop = yPages.projects.start;
        break;
      case NAVIGATION.CONTACT.NAME:
        document.documentElement.scrollTop = yPages.contact.start;
        break;
      default:
        return;
    }
  }

  return (
    <Link
        href={item.href}
        // onClick={() => onClickScrollToPage(yPages, item)}
      >
      <motion.a
        className={classNames(
          item.current ? 'after:scale-x-100' : 'after:scale-x-0 after:hover:scale-x-100 after:hover:transition after:hover:ease-in after:hover:duration-300',
          'px-3 py-2 font-large relative inline-block after:content-[""] after:absolute after:w-full after:h-1 after:bg-raisinBlack after:bottom-0 after:left-0 after:origin-top-left after:scale-y-100'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name.toUpperCase()}
      </motion.a>
    </Link>
  )
}

export default SingleLinkItem