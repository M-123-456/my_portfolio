import React from 'react'
import PrimaryButton from '../../buttons/PrimaryButton'
import Footer from '../../Footer'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section
        className="min-h-screen pt-16 px-4 flex justify-center relative bg-redSalsa bg-[linear-gradient(160deg,_#F15156_40%,_#d8d8d8_40%)] md:pt-32 "
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
          <div>
            <p
              className="text-xl font-bold text-center md:text-4xl"
            >
              Send me a message
            </p>
            <p
              className="mt-4 text-lg text-center md:text-3xl"
            >
              mikigerlach2@gmail.com
            </p>
          </div>

          <div>
            <p
              className="text-xl font-bold text-center md:text-4xl"
            >
              Or connect with me on socials
            </p>
            <ul
              className="mt-4 flex justify-center gap-6"
            >
              <li>
                <PrimaryButton>
                  <a href="https://github.com/M-123-456">GitHub</a>
                </PrimaryButton>
              </li>
              <li>
                <PrimaryButton>
                  <a href="https://www.linkedin.com/in/miki-gerlach/">LinkedIn</a>
                </PrimaryButton>
              </li>
            </ul>

          </div>

            
            
              
        </div>
    </div>

       
      <Footer />
    </section>
  )
}

export default Contact