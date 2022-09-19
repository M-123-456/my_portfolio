import { Disclosure } from '@headlessui/react';

// Types
import { INavigation } from '../../../types';

type Props = {
    item: INavigation;
}

const MobileSingleLink:React.FC<Props> = ({ item }) => {

  return (
    <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className='border-b-4 border-transparent hover:border-raisinBlack block w-full px-6 py-2 text-base font-medium'
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
  )
}

export default MobileSingleLink