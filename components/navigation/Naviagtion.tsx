import { Disclosure } from '@headlessui/react'

// Components
import MenuButton from './mobile/MenuButton';
import MobileLinks from './mobile/MobileLinks';
import Links from './links/Links';


const Naviagtion = () => {

  return (
    <header className="fixed w-screen z-30 flex justify-end">
      <Disclosure as="nav" className="">
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
    </header>
  )
};

export default Naviagtion