import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Types
import { IProjectsData } from '../../../../types';

// Data
import { containerVariants } from '../../../../data/animationVariants';

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
        {/* If pictures are hovered, info of the project will be shown */}
        {
            infoShown ? 
            <ProjectInfo 
                project={project}
            /> :
            <div
                className="border-raisinBlack border-2 w-[20rem] h-[20rem]"
            >
                <Image 
                    src={project.image}
                    width={400}
                    height={400}
                    objectFit="cover"
                    className="relative h-full"
                />
            </div>

        }
        
       
        
    </motion.div>
  )
}

export default ProjectCard;