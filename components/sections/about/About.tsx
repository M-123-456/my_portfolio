import Image from 'next/image';
import AboutText from './AboutText';

type Props = {}

const About = (props: Props) => {
  return (
    <section
        className="min-h-screen pt-16 md:pt-32"
        id="About"
    >
     <AboutText /> 
    </section>
  )
}

export default About