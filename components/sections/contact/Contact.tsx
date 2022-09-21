import React from 'react'
import Footer from '../../Footer'
import Email from './Email'
import Socials from './Socials'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section
        className="min-h-screen px-4 items-center flex justify-center relative bg-[linear-gradient(160deg,_#fff_50%,_#fdeb00_50%)]"
        id="Contact"
    >
      <div
        className="md:w-1/2 flex flex-col gap-4"
    >
        <h3
            className="text-3xl text-center font-bold border-b-4 border-raisinBlack md:text-6xl"
        >
            Contact
        </h3>

        <div
            className="my-6 flex flex-col gap-10"
        >
          <Email />
          <Socials />
        </div>

    </div>
      <Footer />
    </section>
  )
}

export default Contact