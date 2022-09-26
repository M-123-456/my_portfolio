import { Disclosure } from '@headlessui/react'
import { motion } from 'framer-motion';

// Context
import { useStore } from '../../store';

// Data
import { NAVIGATION } from '../../data/constants';
import { containerVariants } from '../../data/animationVariants';

// Components
import MenuButton from './mobile/MenuButton';
import MobileLinks from './mobile/MobileLinks';
import Links from './links/Links';

// Types
import { INavigation } from '../../types';

const Naviagtion = () => {

  const navigation = useStore(state => state.navigation);
  console.log(navigation)

  

  return (
      <Disclosure as="nav" >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                
                {/* Mobile menu button*/}
                <MenuButton open={open}/>

                {/* Links to each sections */}
                <Links/>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <MobileLinks />
          </>
        )}
      </Disclosure>
  )
};

export default Naviagtion