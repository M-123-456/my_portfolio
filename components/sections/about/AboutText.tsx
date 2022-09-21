import React from 'react'
import PrimaryButton from '../../buttons/PrimaryButton'
import SecondaryButton from '../../buttons/SecondaryButton'

const AboutText = () => {
  return (
    <div
        className="md:w-1/2"
    >
        <h3
            className="mr-4 md:mr-0 text-3xl font-bold border-b-4 border-raisinBlack md:text-6xl"
        >
            <span className="md:pl-4">
                Who am I?
            </span>
        </h3>
        <p
            className="my-6 px-4 md:pl-4"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, molestiae delectus! Amet, tempore unde. Voluptate maiores adipisci provident dolores iusto molestias eum ea, voluptatibus, omnis quia veniam corporis reprehenderit quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reprehenderit dolores. Fuga doloribus porro repudiandae eligendi cum iusto sit quidem, neque quos commodi vel facilis perspiciatis dolorum ut! Quibusdam, accusamus!
        </p>
        <div
            className="flex justify-end pr-8 md:pt-10"
        >
            <SecondaryButton>
                <a href="/cv.pdf" download>
                    Download CV
                </a>
            </SecondaryButton>
        </div>
    </div>
  )
}

export default AboutText