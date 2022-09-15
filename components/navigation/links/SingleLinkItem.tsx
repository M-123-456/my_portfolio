import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useStore } from '../../../store';
import { classNames } from '../../../utils/classNames';

// Types
import { Inavigation } from '../../../types';


type Props = {
    item: Inavigation;
}

const SingleLinkItem: React.FC<Props> = ({ item }) => {
  
  const router = useRouter();

  const updateNavCurrent = useStore(state => state.updateNavCurrent);

  
  // everytime a section is selected, set current in navigation true. If not selected, set it to false. This state is used for the style to show the current section user is watching.
  useEffect(() => {
    if (router?.asPath === `/#${item.name}`) {
      updateNavCurrent(item.name)
    }
  }, [router])

  return (
    <Link
        href={item.href}
      >
      <div
        className={classNames(
          item.current ? 'bg-accentYellow text-darkBlue' : 'text-darkBlue hover:bg-darkBlue hover:text-white',
          'px-3 py-2 rounded-md text-md font-medium'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </div>
    </Link>
  )
}

export default SingleLinkItem