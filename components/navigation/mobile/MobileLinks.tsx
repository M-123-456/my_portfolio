import { Disclosure } from '@headlessui/react';

import { INavigation } from '../../../types';

import { useStore } from '../../../store';

import MobileSingleLink from './MobileSingleLink';

// type Props = {
//   navigation: INavigation[];
// }

const MobileLinks= () => {

  const navigation = useStore(state => state.navigation);

  return (
    <Disclosure.Panel className="sm:hidden bg-white border shadow-lg">
      <div className="w-screen space-y-1 pl-3 pr-6 pt-2 pb-3">
        {navigation.map((item) => (
          <MobileSingleLink 
            key={item.name}
            item={item}
          />
        ))}
      </div>
    </Disclosure.Panel>
  )
}

export default MobileLinks;