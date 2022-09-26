import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Data
import { projects } from '../../../data/projectsData';
import ProjectCard from './projectCard/ProjectCard';

// Components
import ProjectsText from './ProjectsText'

type Props = {
  speed: number;
}

const Projects: React.FC<Props> = ({ speed }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.section
        className="min-h-screen pt-16 pb-6 md:pt-32 "
        id="Projects"
        style={{y:y}}
    >
      <ProjectsText />
      <div
        className="mt-10 flex flex-wrap justify-center gap-8 pr-4"
      >
        {
          projects.map(project => (
            <ProjectCard 
              key={project.name}
              project={project}
            />
          ))
        }
      </div>
    </motion.section>
  )
}

export default Projects