import { Dispatch, SetStateAction } from 'react';


// Context
import { useStore } from '../../../store';

// Types
import { INavigation } from '../../../types';

// Components
import SingleLinkItem from './SingleLinkItem';


// type Props = {
//     navigation: INavigation[];
//     setNavigation: Dispatch<SetStateAction<INavigation[]>>;
// }

const Links= () => {

    const navigation = useStore(state => state.navigation);
    console.log(navigation)

  return (
    <div className="mr-3 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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