import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <AnimatePresence
          exitBeforeEnter
          // initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
      <Footer />
    </>
  )
}

export default MyApp
