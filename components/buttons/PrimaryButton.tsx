import React from 'react'

type Props = {
    children: React.ReactNode
}

const PrimaryButton: React.FC<Props> = ( { children } ) => {
  return (
    <button
      className="border-2 border-raisinBlack text-white bg-raisinBlack py-2 px-4 rounded hover:opacity-80"
    >
      { children }
    </button>
  )
}

export default PrimaryButton;