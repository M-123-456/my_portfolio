import { homeData } from '../../../data/homeData';




// todo text size 

const TopHero = () => {
  return (
    <div
        area-label="hero"
        className="flex flex-col"
    >
        <div
            className="text-2xl leading-[4rem] md:leading-[6rem] md:text-4xl "
        >
            {homeData.greeting}<br/>
            <h1
                className="text-6xl md:text-[10rem] lg:text-[15rem] tracking-tighter"
            >
                {homeData.name}
            </h1>
        </div>
        <h2
            className="mt-4 text-2xl md:text-3xl md:self-end md:border-b-2 border-black"
        >
            {homeData.jobTitle}
        </h2>
        <div
            className="mt-6 flex flex-col md:flex-row gap-3 md:mt-16"
            area-label="buttons"
        >
        </div>
    </div>
  )
}

export default TopHero