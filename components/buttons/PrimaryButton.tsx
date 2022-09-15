import React from 'react'

type Props = {
    children: React.ReactNode
}

const PrimaryButton: React.FC<Props> = ( { children } ) => {
  return (
    <button
      className="border-2 border-darkBlue bg-darkBlue text-white py-2 px-4 rounded-full hover:bg-white hover:text-darkBlue"
    >
        { children }
    </button>
  )
}

export default PrimaryButton;