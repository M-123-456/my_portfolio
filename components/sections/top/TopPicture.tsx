import Image from 'next/image';
import { homeData } from '../../../data/homeData';


const TopPicture = () => {
  return (
    <>
        <div
            className="hidden md:block"
            >
            <Image 
                src={homeData.image}
                width={400}
                height={400}
                className="rounded-full"
                />
        </div>
    </>
  )
}

export default TopPicture