import React from 'react'

type Props = {
    children: React.ReactNode
}

const PrimaryButton: React.FC<Props> = ( { children } ) => {
  return (
    <button
      className="relative px-6 py-3 font-bold text-raisinBlack group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-mainYellow group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full border-4 border-raisinBlack"></span>
      <span className="relative">
        { children }
      </span>
    </button>
  )
}

export default PrimaryButton;