import { motion } from 'framer-motion';
import { useParallax } from 'react-scroll-parallax';

// Data
import { containerVariants } from '../../../data/animationVariants';

// Components
import HeroTitle from './HeroTitle'

const Hero = () => {

  return (
    <motion.section
        className="min-h-screen flex items-center justify-center bg-[linear-gradient(180deg,_#fdeb00_50%,_#edebeb_50%)] md:bg-[linear-gradient(90deg,_#fdeb00_50%,_#edebeb_50%)]"
        id="Hero"
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}
    >
      <HeroTitle />
    </motion.section>
  )
}

export default Hero;