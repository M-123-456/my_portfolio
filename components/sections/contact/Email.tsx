import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { authorData } from '../../../data/authorData';


const Email = () => {

    const [isHovered, setIsHovered] = useState(true);

    const cursorVariants = {
        hidden: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    }
  

    const copyToClipboard = (email:string) => {
        navigator.clipboard.writeText(email)
    }

  return (
    <div>
        <p
            className="text-xl font-bold text-center md:text-4xl"
        >
            Send me a message
        </p>

        <p
            className="mt-4 text-lg flex justify-center md:text-3xl"
        >
            <a 
                className="text-center relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-raisinBlack after:bottom-0 after:left-0 after:origin-top-center after:scale-y-100 after:scale-x-0 after:hover:scale-x-100 after:transition after:ease-in after:duration-300"
                href={`mailto:${authorData.email}`}
            >
                {authorData.email}
            </a>
        </p>
    </div>
  )
}

export default Email