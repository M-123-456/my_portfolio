import { Dispatch, SetStateAction } from 'react';

import { useStore } from '../../../store';


// Types
import { Inavigation } from '../../../types';

// Components
import SingleLinkItem from './SingleLinkItem';


// type Props = {
//     navigation: Inavigation[];
//     setNavigation: Dispatch<SetStateAction<Inavigation[]>>;
// }

const Links = () => {

    const navigation = useStore(state => state.navigation);

  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {navigation.map((item) => (
                <SingleLinkItem 
                    key={item.name}
                    item={item}
                />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Links