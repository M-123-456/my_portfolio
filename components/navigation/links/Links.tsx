import { motion } from 'framer-motion';

// Data
import { useStore } from '../../../store';
import { containerVariants } from '../../../data/animationVariants';

// Types
// import { INavigation } from '../../../types';

// Components
import SingleLinkItem from './SingleLinkItem';


// type Props = {
//     navigation: INavigation[];
//     setNavigation: Dispatch<SetStateAction<INavigation[]>>;
// }

const Links= () => {

    const navigation = useStore(state => state.navigation);

  return (
    <motion.div 
        className="mr-3 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}
    >
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
    </motion.div>
  )
}

export default Links