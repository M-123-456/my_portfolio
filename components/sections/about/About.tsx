import Image from 'next/image';
import AboutPicture from './AboutPicture';
import AboutText from './AboutText';

type Props = {}

const About = (props: Props) => {
  return (
    <section
        className="min-h-screen flex flex-col-reverse md:flex-row pt-16 md:pt-32 bg-lightGray"
        id="About"
    >
      <AboutPicture />
      <AboutText /> 
    </section>
  )
}

export default About