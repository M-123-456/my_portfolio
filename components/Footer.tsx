import { FiGithub } from 'react-icons/fi';
import { TbBrandLinkedin } from 'react-icons/tb';
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
      {/* <ul
        area-label="sns_icons"
        className="text-3xl flex gap-6"
      >
        <li>
          <a href="https://github.com/M-123-456"><FiGithub /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/miki-gerlach/"><TbBrandLinkedin /></a>
        </li>
      </ul> */}
    
    </footer>
  )
}

export default Footer