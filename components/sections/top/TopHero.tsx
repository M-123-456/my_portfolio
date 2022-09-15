import Image from 'next/image';
import { HiDownload } from 'react-icons/hi'


import { homeData } from '../../../data/homeData';

// Components
import PrimaryButton from '../../buttons/PrimaryButton';
import SecondaryButton from '../../buttons/SecondaryButton';



const TopHero = () => {
  return (
    <div
        className="mt-10 md:mt-0 relative px-4"
        area-label="hero"
    >
        {/* Picture Mobile Version */}
        <div
            className="absolute top-[-4rem] right-[-1rem] md:hidden"
            >
            <Image 
                src={homeData.image}
                width={100}
                height={100}
                className="rounded-full"
                />
        </div>

        <h1
            className="text-3xl md:text-4xl leading-[3rem] md:leading-[6rem]"
        >
            {homeData.greeting}<br/>
            <span
                className="text-4xl md:text-6xl border-b-4 border-accentYellow"
            >
                {homeData.name}
            </span>
        </h1>
        <h2
            className="mt-4 text-2xl md:text-3xl"
        >
            {homeData.jobTitle}
        </h2>
        <div
            className="mt-6 flex flex-col md:flex-row gap-3 md:mt-16"
            area-label="buttons"
        >
            <PrimaryButton>
                Contact me
            </PrimaryButton>
            <SecondaryButton>
                <div className="flex ">
                    Download resume<HiDownload />
                </div>
            </SecondaryButton>
        </div>
    </div>
  )
}

export default TopHero