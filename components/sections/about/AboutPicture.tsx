import Image from 'next/image';

type Props = {}


const AboutPicture = (props: Props) => {
  return (
    <div
      className="mt-16 md:w-1/2 md:self-end md:justify-self-end"
    >
      <div
        className="image-container"
      >
        <Image 
            className="image"
            src="/thinkingMiki.png"
            alt="picture of miki looking above"
            width={450}
            height={400}
            // layout='fill'
            // objectFit="cover"
        />
      </div>
    </div>
  )
}

export default AboutPicture