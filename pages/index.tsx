import { useEffect, useState, MouseEvent } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion';

// Context
import { useStore } from '../store';

// Components
import About from '../components/sections/about/About';
import Contact from '../components/sections/contact/Contact';
import Hero from '../components/sections/hero/Hero';
import Projects from '../components/sections/projects/Projects';
import Navigation from '../components/navigation/Naviagtion';




const Home: NextPage = () => {
  
  const scrollY = useStore(state => state.scrollY);
  const setScrollY = useStore(state => state.setScrollY);
  const setYOfSection = useStore(state => state.setYOfSection);


  useEffect(() => {
    window.addEventListener('scroll', setScrollY);
    
    console.log(scrollY);
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [scrollY]);



  // set position of all sections
  // Wherever the scrollY position is, hero start should be set to 0
  useEffect(() => {
    // Hero
    const hero = document.querySelector("#Hero");
    const heroEnd = hero!.getBoundingClientRect().height;
    setYOfSection("top", 0, heroEnd)

    // About
    const about = document.querySelector("#About");
    const aboutEnd = heroEnd + about!.getBoundingClientRect().height;
    setYOfSection("about", heroEnd, aboutEnd);
  
    // Projects
    const projects = document.querySelector("#Projects");
    const projectsEnd = aboutEnd + projects!.getBoundingClientRect().height;
    setYOfSection("projects", aboutEnd, projectsEnd);

    // Contact
    const contact = document.querySelector("#Contact");
    const contactEnd = projectsEnd + contact!.getBoundingClientRect().height;
    setYOfSection("contact", projectsEnd, contactEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps 

  }, []);

  return (
    <div
      className="text-raisinBlack"
    >
      <Head>
        <title>Portfolio: Miki Gerlach</title>
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
        <Hero  />
        <About />
        <Projects />
        <Contact  />
      </main>
    </div>
  )
};



export default Home
