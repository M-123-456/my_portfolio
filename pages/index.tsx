import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import { useStore } from '../store';

import About from '../components/sections/about/About';
import Contact from '../components/sections/contact/Contact';
import Top from '../components/sections/top/Top';
import Projects from '../components/sections/projects/Projects';
import Navigation from '../components/navigation/Naviagtion';



const Home: NextPage = () => {

  const scrollY = useStore(state => state.scrollY)
  const setScrollY = useStore(state => state.setScrollY);
  console.log(scrollY);

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0,1], [-distance, distance]);
  }

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
        <Top speed={4} />
        <About speed={-10} />
        <Projects speed={-10} />
        <Contact speed={-10} />
      </main>
    </div>
  )
};



export default Home
