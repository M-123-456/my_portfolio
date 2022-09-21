import Image from 'next/image';

type Props = {}

const AboutPicture = (props: Props) => {
  return (
    <div
        className="md:w-1/2 pr-4 self-end"
    >
        <Image 
            src="/thinkingMiki.png"
            width={450}
            height={400}
        />
    </div>
  )
}

export default AboutPicture