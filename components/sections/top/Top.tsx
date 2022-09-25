import { motion } from 'framer-motion';

// Data
import { containerVariants } from '../../../data/animationVariants';

// Components
import TopHero from './TopHero'

type Props = {}

const Top = (props: Props) => {
  return (
    <motion.section
        className="min-h-screen flex items-center justify-center bg-[linear-gradient(180deg,_#fdeb00_50%,_#edebeb_50%)] md:bg-[linear-gradient(90deg,_#fdeb00_50%,_#edebeb_50%)]"
        id="Top"
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}
    >
      <TopHero />
    </motion.section>
  )
}

export default Top;