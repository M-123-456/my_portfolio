import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PageWrapper from '../components/wrapper/PageWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
