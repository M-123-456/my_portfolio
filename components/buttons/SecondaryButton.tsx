import React from 'react'

type Props = {
    children: React.ReactNode
}

const SecondaryButton: React.FC<Props> = ( { children } ) => {
  return (
    <button
      className="border-2 border-darkBlue bg-white text-darkBlue py-2 px-4 rounded-full hover:bg-darkBlue hover:text-white"
    >
        { children }
    </button>
  )
}

export default SecondaryButton;