import { homeData } from '../../../data/homeData';




// todo text size 

const TopHero = () => {
  return (
    <div
        area-label="hero"
    >
        <div
            className="flex flex-col text-2xl md:text-4xl leading-[4rem] md:leading-[8rem] lg:leading-[10rem]"
        >
            <p
                className="pl-1 md:pl-4 lg:pl-5"
            >
                {homeData.greeting}
            </p>
            <h1
                className="text-[3.5rem] md:text-[9rem] lg:text-[12rem] tracking-tighter"
            >
                {homeData.name}
            </h1>
            <h2
                className="pl-1 mt-4 text-2xl md:text-3xl md:self-end md:border-b-2 border-black"
            >
                {homeData.jobTitle}
            </h2>
        </div>
    </div>
  )
}

export default TopHero