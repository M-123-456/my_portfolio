// Data
import { projects } from '../../../data/projectsData';
import ProjectsCard from './ProjectsCard';

// Components
import ProjectsText from './ProjectsText'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section
        className="min-h-screen pt-16 pl-4 md:pt-32"
        id="Projects"
    >
      <ProjectsText />
      <div
        className="mt-10 flex flex-wrap justify-center gap-8"
      >
        {
          projects.map(project => (
            <ProjectsCard 
              key={project.name}
              project={project}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Projects