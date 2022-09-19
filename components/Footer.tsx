
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

type Props = {}

const Footer = (props: Props) => {

  return (
    <footer
      className="absolute bottom-2 left-2"
    >
      <div
        area-label="copyright"
        className="text-raisinBlack flex items-center gap-2"
      >
        <AiOutlineCopyrightCircle /> 2022 Miki Gerlach, All Rights Reserved.
      </div>
    
    </footer>
  )
}

export default Footer