import { useRef } from 'react';
import AboutPicture from './AboutPicture';
import AboutText from './AboutText';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  speed: number;
}

const About: React.FC<Props> = ({ speed }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.section
        className="min-h-screen flex flex-col-reverse md:flex-row pt-16 md:pt-32 bg-lightGray relative"
        id="About"
        style={{y:y}}
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