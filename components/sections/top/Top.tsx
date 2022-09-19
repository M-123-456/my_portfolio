import React from 'react'
import TopHero from './TopHero'

type Props = {}



const Top = (props: Props) => {
  return (
    <section
        className="min-h-screen flex items-center justify-center bg-[linear-gradient(90deg,_#fdeb00_50%,_#d8d8d8_50%)]"
        id="Top"
    >
      <TopHero />
    </section>
  )
}

export default Top;