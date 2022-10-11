import { motion } from 'framer-motion';

import { containerVariants } from '../../../data/animationVariants';

// Components
import Button from '../../buttons/Button';

const AboutText = () => {
  return (
    <motion.div
        className="md:w-1/2"
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}
    >
        <h3
            className="mr-4 md:mr-0 text-3xl font-bold border-b-4 border-raisinBlack md:text-6xl"
        >
            <span className="md:pl-4">
                Who am I?
            </span>
        </h3>
        <p
            className="my-6 px-4 md:pl-4"
        >
            Hi, I am Miki and I came from Japan to Germany in 2009 to start a new stage of my life together with my husband. Since we became parents of one, two, three children,  
            After 12 years in a Japanese company in Düsseldorf, where I learned a lot about business, supply chain managemen, Excel, project management, reporting and the ups and downs of intercultural teams, I am currently reinventing myself. 
            
            Since early 2020, I&aposve been digging into the mysteries of development. What gets me out of bed in the morning is my will to constanly learn new things and grow personally. I am looking forward to working on exciting projects in an inspiring environment.
        </p>
        <div
            className="flex justify-end pr-8 md:pt-10"
        >
        </div>
    </motion.div>
  )
}

export default AboutText