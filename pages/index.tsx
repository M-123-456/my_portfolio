import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/sections/about/About';
import Contact from '../components/sections/contact/Contact';
import Top from '../components/sections/top/Top';
import Projects from '../components/sections/projects/Projects';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="portfolio_website" content="Portfolio website of Miki Gerlach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Top />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
};



export default Home
