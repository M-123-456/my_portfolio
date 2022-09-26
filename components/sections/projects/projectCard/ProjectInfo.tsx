import { motion } from 'framer-motion';

import { IProjectsData } from '../../../../types';

// Data
import { cardVariants } from '../../../../data/animationVariants';

import SecondaryButton from '../../../buttons/SecondaryButton';

type Props = {
    project: IProjectsData;
}

const ProjectInfo: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
            className="w-full h-full bg-lightGray flex flex-col justify-center gap-4  px-3"
            initial={cardVariants.hidden}
                animate={cardVariants.visible}
    >
            <h4
                className="text-2xl text-raisinBlack"
            >
                {project.name}
            </h4>
            <h5
                className="text-lg text-raisinBlack"
            >
                {project.tech}
            </h5>
            <SecondaryButton>
                <a href={project.github}>Go to GitHub</a>
            </SecondaryButton>
            {
                project.website && 
                <SecondaryButton>
                    <a href={project.website}>Visit Website</a>
                </SecondaryButton>
            }
        </motion.div>
  )
}

export default ProjectInfo