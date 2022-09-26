import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Data
import { containerVariants } from '../../../data/animationVariants';

// Components
import TopHero from './TopHero'

type Props = {
  speed: number;
}

const Top: React.FC<Props> = ({ speed }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.section
        className="min-h-screen flex items-center justify-center bg-[linear-gradient(180deg,_#fdeb00_50%,_#edebeb_50%)] md:bg-[linear-gradient(90deg,_#fdeb00_50%,_#edebeb_50%)]"
        id="Top"
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}
        style={{y:y}}
    >
      <TopHero />
    </motion.section>
  )
}

export default Top;