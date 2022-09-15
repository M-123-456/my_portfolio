import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
  open: boolean;
}

const MenuButton = (props: Props) => {
  const { open } = props;
  return (
    <div className="absolute right-5 flex items-center sm:hidden">
      <Disclosure.Button 
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-darkBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="sr-only">Open main menu</span>
          {open ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
      </Disclosure.Button>
    </div>
  )
}

export default MenuButton