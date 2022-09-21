import AboutPicture from './AboutPicture';
import AboutText from './AboutText';

type Props = {}

const About = (props: Props) => {
  return (
    <section
        className="min-h-screen flex flex-col-reverse md:flex-row pt-16 md:pt-32 bg-lightGray relative"
        id="About"
    >
      <AboutPicture />
      <AboutText />
      <div
        className="absolute bottom-0 w-full border-b-8 border-mainYellow"
      >
      </div>
    </section>
      
  )
}

export default About