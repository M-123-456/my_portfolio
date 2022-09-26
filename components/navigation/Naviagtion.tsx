import { Disclosure } from '@headlessui/react'

// Components
import MenuButton from './mobile/MenuButton';
import MobileLinks from './mobile/MobileLinks';
import Links from './links/Links';

const Naviagtion = () => {

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