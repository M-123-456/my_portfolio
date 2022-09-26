import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {

  return (
    <footer
      className="w-full px-2 absolute bottom-2 flex justify-center"
    >
      <div
        area-label="copyright"
        className="text-raisinBlack flex items-center gap-2"
      >
        <AiOutlineCopyrightCircle />2022 Miki Gerlach, All Rights Reserved.
      </div>
    
    </footer>
  )
}

export default Footer