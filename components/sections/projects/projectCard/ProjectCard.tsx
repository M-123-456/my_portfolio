import { useState } from 'react';
import Image from 'next/image';

// Types
import { IProjectsData } from '../../../../types';

// Components
import ProjectInfo from './ProjectInfo';

type Props = {
    project: IProjectsData;
}

const ProjectCard: React.FC<Props> = ({ project }) => {

    const [infoShown, setInfoShown] = useState(false);


  return (
    <div
        area-label="project_card"
        onMouseEnter={() => setInfoShown(true)}
        onMouseLeave={() => setInfoShown(false)}
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
        
       
        
    </div>
  )
}

export default ProjectCard;