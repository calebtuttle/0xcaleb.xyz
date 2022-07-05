import { AnimatePresence } from 'framer-motion'
import UserSettingsProvider from '../context/UserSettings'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <UserSettingsProvider>
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
      </UserSettingsProvider>
    </>
  )
}

export default MyApp
