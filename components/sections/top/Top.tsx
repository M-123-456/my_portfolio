import React from 'react'
import TopHero from './TopHero'
import TopPicture from './TopPicture'

type Props = {}



const Top = (props: Props) => {
  return (
    <section
        className="min-h-screen flex items-center justify-center md:pt-28 md:items-start md:justify-evenly"
        id="Top"
    >
      <TopHero />
      <TopPicture />
    </section>
  )
}

export default Top