import Image from 'next/image';

import { AiOutlineCopyrightCircle } from 'react-icons/ai';

type Props = {}

const Footer = (props: Props) => {

  return (
    <footer
      className="bottom-0 fixed"
    >
      <div className="relative">
        <Image 
        src='/wave.png'
        width={1500}
        height={900}
        />
        <div
          area-label="copyright"
          className="absolute bottom-5 left-3 text-white flex items-center gap-2"
        >
          <AiOutlineCopyrightCircle /> 2022 Miki Gerlach, All Rights Reserved.
        </div>
      </div>
      
    </footer>
  )
}

export default Footer