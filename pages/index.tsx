import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'

import { useStore } from '../store';

import About from '../components/sections/about/About';
import Contact from '../components/sections/contact/Contact';
import Top from '../components/sections/top/Top';
import Projects from '../components/sections/projects/Projects';
import Navigation from '../components/navigation/Naviagtion';
import Footer from '../components/Footer';

const Home: NextPage = () => {

  const scrollY = useStore(state => state.scrollY)
  const setScrollY = useStore(state => state.setScrollY);
  console.log(scrollY);

  useEffect(() => {
    window.addEventListener('scroll', setScrollY);
  }, [])

  return (
    <div
      className="text-raisinBlack"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="portfolio_website" content="Portfolio website of Miki Gerlach" />
        <link rel="icon" href="/favicon.ico" />

        {/* Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet"
        />
      </Head>

      <header className="fixed w-screen z-30 flex justify-end">
        <Navigation />
      </header>

      <main>
        {/* <Image 
          className="h-screen bg-fixed bg-center"
          src='/wave.svg'
          layout={`fill`}
          objectFit={`cover`}
        /> */}
          <Top />
          <About />
          <Projects />
          <Contact />
      </main>
    </div>
  )
};



export default Home
