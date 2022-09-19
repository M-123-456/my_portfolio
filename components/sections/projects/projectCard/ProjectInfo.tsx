import PrimaryButton from '../../../buttons/PrimaryButton';

import { IProjectsData } from '../../../../types';
import SecondaryButton from '../../../buttons/SecondaryButton';

type Props = {
    project: IProjectsData;
}

const ProjectInfo: React.FC<Props> = ({ project }) => {
  return (
    <div
            className="w-[20rem] h-[20rem] bg-white flex flex-col justify-center gap-4  px-3 border-4 border-raisinBlack"
        >
            <h4
                className="text-2xl text-redSalsa"
            >
                {project.name}
            </h4>
            <h5
                className="text-lg text-yellowGreen"
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
        </div>
  )
}

export default ProjectInfo