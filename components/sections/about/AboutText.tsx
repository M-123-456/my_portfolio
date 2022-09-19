import React from 'react'
import PrimaryButton from '../../buttons/PrimaryButton'

type Props = {}

const AboutText = (props: Props) => {
  return (
    <div
        className="md:w-1/2"
    >
        <h3
            className="text-3xl font-bold border-b-4 border-raisinBlack md:text-6xl"
        >
            Who am I?
        </h3>
        <p
            className="my-6 pr-4"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, molestiae delectus! Amet, tempore unde. Voluptate maiores adipisci provident dolores iusto molestias eum ea, voluptatibus, omnis quia veniam corporis reprehenderit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reprehenderit dolores. Fuga doloribus porro repudiandae eligendi cum iusto sit quidem, neque quos commodi vel facilis perspiciatis dolorum ut! Quibusdam, accusamus!
        </p>
        <PrimaryButton>
            Download CV
        </PrimaryButton>
    </div>
  )
}

export default AboutText