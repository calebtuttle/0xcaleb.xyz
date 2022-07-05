import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { useUserSettings } from '../context/UserSettings'
import styles from '../styles/Navbar.module.css'
import SettingsMenu from './SettingsMenu'

export default function Navbar() {
  const {linkColor, setLinkColor} = useUserSettings()

  const linkClasses = classNames({
    'italic': true,
    'px-3': true,
    'duration-300': true,
    'hover:text-orange-600': linkColor == 'orange',
    'hover:text-blue-500': linkColor == 'blue',
  })

  return (
    <>
      <Head>
        <title>Caleb Tuttle</title>
        <meta name="description" content="Caleb Tuttle's website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="font-serif">
        <div className={styles.topnavBackground}>
          <div className="float-left absolute p-5 text-gray-100 text-xl font-thin">
            <SettingsMenu />
          </div>
          <div className="flex flex-wrap content-evenly justify-center">
            <div className="float-left p-5 text-center text-gray-100 text-2xl font-thin">
              <Link href="/">
                <a className={linkClasses}>Home</a>
              </Link>

              {/* <em>~</em>
              <Link href="/about">
                <a className="px-3 italic hover:text-orange-600 duration-300">About</a>
              </Link> */}

              {/* <em>~</em>
              <Link href="/bookshelf">
                <a className="px-3 italic hover:text-orange-600 duration-300">Bookshelf</a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
