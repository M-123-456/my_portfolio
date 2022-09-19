import React from 'react'
import PrimaryButton from '../../buttons/PrimaryButton'

const AboutText = () => {
  return (
    <div
        className="md:w-1/2 pr-4"
    >
        <h3
            className="text-3xl font-bold border-b-4 border-raisinBlack md:text-6xl"
        >
            <span className="pl-4">
                Who am I?
            </span>
        </h3>
        <p
            className="my-6 pl-4"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, molestiae delectus! Amet, tempore unde. Voluptate maiores adipisci provident dolores iusto molestias eum ea, voluptatibus, omnis quia veniam corporis reprehenderit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reprehenderit dolores. Fuga doloribus porro repudiandae eligendi cum iusto sit quidem, neque quos commodi vel facilis perspiciatis dolorum ut! Quibusdam, accusamus!
        </p>
        <div
            className="pl-4"
        >
            {/* <span
                className=" border-l-4 border-raisinBlack py-2 px-2 hover:border-b-4 transition hover:ease-in hover:duration-300"
            >
                Download CV
            </span> */}
            <PrimaryButton>
                Download CV
            </PrimaryButton>
        </div>
    </div>
  )
}

export default AboutText