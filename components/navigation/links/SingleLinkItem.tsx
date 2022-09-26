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
import { INavigation } from '../../../types';


type Props = {
    item: INavigation;
}

const SingleLinkItem: React.FC<Props> = ({ item }) => {
  
  const router = useRouter();
  console.log(item.current)

  const setNavCurrent = useStore(state => state.setNavCurrent)
  const scrollY = useStore(state => state.scrollY);
  const yPages = useStore(state => state.yOfPages);

  
  // Everytime a section is selected, set current in navigation true. If not selected, set it to false. This state is used for the style to show the current section user is watching.
  useEffect(() => {
    if (router?.asPath === `/#${item.name}`) {
      setNavCurrent(item.name)
    }
  }, [router])

  // Set current in navigation depending on scrolling position
  useEffect(() => {
    let current = "";
    if(scrollY >= yPages.TOP.start && scrollY < yPages.TOP.end) {
      current = NAVIGATION.TOP.NAME
    } else if (scrollY >= yPages.ABOUT.start && scrollY < yPages.ABOUT.end) {
      current = NAVIGATION.ABOUT.NAME
    } else if (scrollY >= yPages.PROJECTS.start && scrollY < yPages.PROJECTS.end) {
      current = NAVIGATION.PROJECTS.NAME
    } else if (scrollY >= yPages.CONTACT.start) {
      current = NAVIGATION.CONTACT.NAME
    }
    setNavCurrent(current);
  }, [scrollY]);

  return (
    <Link
        href={item.href}
      >
      <motion.a
        className={classNames(
          item.current ? 'after:scale-x-100' : 'after:scale-x-0 after:hover:scale-x-100 after:hover:transition after:hover:ease-in after:hover:duration-300',
          'px-3 py-2 font-large relative inline-block after:content-[""] after:absolute after:w-full after:h-1 after:bg-raisinBlack after:bottom-0 after:left-0 after:origin-top-left after:scale-y-100'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </motion.a>
    </Link>
  )
}

export default SingleLinkItem