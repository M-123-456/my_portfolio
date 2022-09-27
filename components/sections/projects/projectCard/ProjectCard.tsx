import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Types
import { IProjectsData } from '../../../../types';

// Data
import { cardVariants, containerVariants } from '../../../../data/animationVariants';

// Components
import ProjectInfo from './ProjectInfo';

type Props = {
    project: IProjectsData;
}

const ProjectCard: React.FC<Props> = ({ project }) => {

    const [infoShown, setInfoShown] = useState(false);


  return (
    <motion.div
        area-label="project_card"
        onMouseEnter={() => setInfoShown(true)}
        onMouseLeave={() => setInfoShown(false)}
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}

    >
        <div
            className="border-raisinBlack border-2 w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem]"
        >
        {/* If pictures are hovered, info of the project will be shown */}
        {
            infoShown ? 
            <ProjectInfo 
                project={project}
            /> :
            <motion.div
                initial={cardVariants.hidden}
                animate={cardVariants.visible}
            >
                <Image 
                    src={project.image}
                    width={400}
                    height={400}
                    objectFit="cover"
                    className="relative h-full"
                />
            </motion.div>
        }
        </div>
        
       
        
    </motion.div>
  )
}

export default ProjectCard;