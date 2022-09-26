import React from 'react'

type Props = {
    children: React.ReactNode
}

const Button: React.FC<Props> = ( { children } ) => {
  return (
    <button
      className="relative inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-raisinBlack group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-raisinBlack group-hover:bg-black"></span>
      <span className="relative text-raisinBlack  group-hover:text-white">
        { children }
      </span>
    </button>
  )
}

export default Button;