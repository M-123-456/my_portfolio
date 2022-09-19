import PrimaryButton from '../../../buttons/PrimaryButton';

import { IProjectsData } from '../../../../types';

type Props = {
    project: IProjectsData;
}

const ProjectInfo: React.FC<Props> = ({ project }) => {
  return (
    <div
            className="w-[20rem] h-[20rem] bg-white flex flex-col justify-center gap-4  px-3 border-4 border-raisinBlack"
        >
            <h4
                className="text-xl"
            >
                {project.name}
            </h4>
            <h5
                className="text-lg"
            >
                {project.tech}
            </h5>
            <PrimaryButton>
                <a href={project.github}>Go to GitHub</a>
            </PrimaryButton>
            {
                project.website && 
                <PrimaryButton>
                    <a href={project.website}>Visit Website</a>
                </PrimaryButton>
            }
        </div>
  )
}

export default ProjectInfo