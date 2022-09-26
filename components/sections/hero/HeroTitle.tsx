import { motion } from 'framer-motion';

// Data
import { authorData } from '../../../data/authorData';
import { containerVariants } from '../../../data/animationVariants';


const HeroTitle = () => {
  return (
    <motion.div
        area-label="hero"
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}
    >
        <div
            className="flex flex-col text-2xl md:text-4xl leading-[4rem] md:leading-[8rem] lg:leading-[10rem]"
        >
            <p
                className="pl-1 md:pl-4 lg:pl-5"
            >
                {authorData.greeting}
            </p>
            <h1
                className="text-[3.5rem] md:text-[9rem] lg:text-[12rem] tracking-tighter"
            >
                {authorData.name}
            </h1>
            <h2
                className="pl-1 mt-4 text-2xl md:text-3xl md:self-end md:border-b-2 border-black"
            >
                {authorData.jobTitle}
            </h2>
        </div>
    </motion.div>
  )
}

export default HeroTitle