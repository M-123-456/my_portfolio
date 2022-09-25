import { motion } from 'framer-motion';

import { containerVariants } from '../../../data/animationVariants';

type Props = {}

const ProjectsText = (props: Props) => {
  return (
    <motion.div
        className="flex flex-col"
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}
    >
        <h3
            className="mr-4 md:mr-0 text-3xl font-bold border-b-4 border-raisinBlack md:text-6xl md:w-1/2 md:text-left"
        >
            <span
                className="pl-4"
            >
                Projects
            </span>
        </h3>
        <p
            className="my-6 px-4"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, molestiae delectus! Amet, tempore unde. Voluptate maiores adipisci provident dolores iusto molestias eum ea, voluptatibus, omnis quia veniam corporis reprehenderit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reprehenderit dolores. Fuga doloribus porro repudiandae eligendi cum iusto sit quidem, neque quos commodi vel facilis perspiciatis dolorum ut! Quibusdam, accusamus!
        </p>
    </motion.div>
  )
}

export default ProjectsText