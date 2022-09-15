import { Disclosure } from '@headlessui/react';

// Types
import { Inavigation } from '../../../types';

type Props = {
    item: Inavigation;
}

const MobileSingleLink:React.FC<Props> = ({ item }) => {

  return (
    <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className='text-darkBlue hover:bg-darkBlue hover:text-white block w-full px-6 py-2 rounded-md text-base font-medium'
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
  )
}

export default MobileSingleLink