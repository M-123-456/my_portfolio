import Image from 'next/image';
import AboutText from './AboutText';

type Props = {}

const About = (props: Props) => {
  return (
    <section
        className="min-h-screen pt-16 pl-4 md:pt-32 bg-gradient-to-tl from-chinaRose to-lavenderFloral"
        id="About"
    >
     <AboutText /> 
    </section>
  )
}

export default About