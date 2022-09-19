import React from 'react'

type Props = {}

const ProjectsText = (props: Props) => {
  return (
    <div
        className="flex flex-col"
    >
        <h3
            className="text-3xl font-bold border-b-4 border-raisinBlack md:text-6xl md:w-1/2 md:self-end md:text-right"
        >
            <span
                className="pr-8"
            >
                Projects
            </span>
        </h3>
        <p
            className="my-6"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, molestiae delectus! Amet, tempore unde. Voluptate maiores adipisci provident dolores iusto molestias eum ea, voluptatibus, omnis quia veniam corporis reprehenderit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reprehenderit dolores. Fuga doloribus porro repudiandae eligendi cum iusto sit quidem, neque quos commodi vel facilis perspiciatis dolorum ut! Quibusdam, accusamus!
        </p>
    </div>
  )
}

export default ProjectsText