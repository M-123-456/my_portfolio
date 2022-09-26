import Image from 'next/image';
import { motion } from 'framer-motion';

// Data
import { containerVariants } from '../../../data/animationVariants';


const AboutPicture = () => {
  return (
    <div
      className="mt-16 md:w-1/2 md:self-end md:justify-self-end"
    >
      <motion.div
        className="image-container"
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}
      >
        <Image 
            className="image"
            src="/thinkingMiki.png"
            alt="picture of miki looking above"
            width={450}
            height={400}
            // layout='fill'
            // objectFit="cover"
        />
      </motion.div>
    </div>
  )
}

export default AboutPicture