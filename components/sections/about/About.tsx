import { motion } from 'framer-motion';
import { useParallax } from 'react-scroll-parallax';

// Components
import AboutText from './AboutText';
import AboutPicture from './AboutPicture';

const About = () => {

  return (
    <motion.section
        className="min-h-screen flex flex-col-reverse md:flex-row pt-16 md:pt-32 bg-lightGray relative"
        id="About"
    >
      <AboutPicture />
      <AboutText />
      <div
        className="absolute bottom-0 w-full border-b-8 border-mainYellow"
      >
      </div>
    </motion.section>
  )
}

export default About