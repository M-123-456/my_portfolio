import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, Dispatch, SetStateAction } from 'react';

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
    // setNavigation: Dispatch<SetStateAction<INavigation[]>>;
}

const SingleLinkItem: React.FC<Props> = ({ item }) => {
  
  const router = useRouter();

  const setNavCurrent = useStore(state => state.setNavCurrent)
  const scrollY = useStore(state => state.scrollY);

  
  // Everytime a section is selected, set current in navigation true. If not selected, set it to false. This state is used for the style to show the current section user is watching.
  useEffect(() => {
    if (router?.asPath === `/#${item.name}`) {
      setNavCurrent(item.name)
    }
  }, [router])

  // Set current in navigation depending on scrolling position
  useEffect(() => {
    let current = "";
    if(scrollY >= NAVIGATION.TOP.POSITION_Y_START && scrollY < NAVIGATION.TOP.POSITION_Y_END!) {
      current = NAVIGATION.TOP.NAME
    } else if (scrollY >= NAVIGATION.ABOUT.POSITION_Y_START && scrollY < NAVIGATION.ABOUT.POSITION_Y_END!) {
      current = NAVIGATION.ABOUT.NAME
    } else if (scrollY >= NAVIGATION.PROJECTS.POSITION_Y_START && scrollY < NAVIGATION.PROJECTS.POSITION_Y_END!) {
      current = NAVIGATION.PROJECTS.NAME
    } else if (scrollY >= NAVIGATION.CONTACT.POSITION_Y_START) {
      current = NAVIGATION.CONTACT.NAME
    }
    setNavCurrent(current);
  }, [scrollY]);

  return (
    <Link
        href={item.href}
      >
      <div
        className={classNames(
          item.current ? 'border-b-4 ' : 'hover:border-b-4 hover: border-dotted',
          'px-3 py-2 text-md font-large border-raisinBlack'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </div>
    </Link>
  )
}

export default SingleLinkItem