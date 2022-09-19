import Image from 'next/image';

// Types
import { IProjectsData } from '../../../types';
import PrimaryButton from '../../buttons/PrimaryButton';

type Props = {
    project: IProjectsData;
}

const ProjectsCard: React.FC<Props> = ({ project }) => {
  return (
    <div
        area-label="project_card"
    >
        <div
            className="border-raisinBlack border-4 w-[20rem] h-[20rem]"
        >
            <Image 
            src={project.image}
            width={400}
            height={400}
            objectFit="cover"
            className="relative h-full"
            />
        </div>
       
        <div
            className="w-[20rem] h-[20rem] bg-white flex flex-col justify-center gap-4  px-3 border-4 border-raisinBlack"
        >
            <h4>{project.name}</h4>
            <h5>{project.tech}</h5>
            <PrimaryButton>
                <a href={project.github}>Go to GitHub</a>
            </PrimaryButton>
            <PrimaryButton>
                <a href={project.website}>Visit Website</a>
            </PrimaryButton>
            
        </div>
    </div>
  )
}

export default ProjectsCard