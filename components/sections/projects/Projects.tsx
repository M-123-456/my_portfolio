import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Data
import { projects } from '../../../data/projectsData';
import ProjectCard from './projectCard/ProjectCard';

// Components
import ProjectsText from './ProjectsText'


const Projects = () => {

  return (
    <motion.section
        className="min-h-screen pt-16 pb-6 md:pt-32 "
        id="Projects"
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