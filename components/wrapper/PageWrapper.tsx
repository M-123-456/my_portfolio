import React from 'react'
import Footer from '../Footer'
import Naviagtion from '../navigation/Naviagtion'

type Props = {
    children: React.ReactNode
}

const PageWrapper = ( { children } : Props) => {
  return (
    <>
        <Naviagtion />
        { children }
        <Footer />
    </>
  )
}

export default PageWrapper