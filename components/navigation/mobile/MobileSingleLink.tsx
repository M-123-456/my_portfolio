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
      className='relative block w-full px-6 py-2 text-base font-medium after:content-[""] after:absolute after:w-full after:h-1 after:bg-raisinBlack after:bottom-0 after:left-0 after:origin-top-left after:scale-y-100 after:scale-x-0 after:hover:scale-x-100 after:hover:transition after:hover:ease-in after:hover:duration-300'
      aria-current={item.current ? 'page' : undefined}
    >
      {item.name.toUpperCase()}
    </Disclosure.Button>
  )
}

export default MobileSingleLink