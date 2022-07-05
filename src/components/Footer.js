import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { useUserSettings } from '../context/UserSettings'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const {linkColor} = useUserSettings()

  const linkClasses = classNames({
    'italic': true,
    'px-3': true,
    'duration-300': true,
    'hover:text-orange-600': linkColor == 'orange',
    'hover:text-blue-600': linkColor == 'blue',
  })

  return (
    <>
      <div className="italic font-serif">
        <div className={styles.footer}>
          <div className="flex flex-wrap content-evenly justify-center">
            <div className="float-left my-5 divide-y-3 text-center text-base font-thin">
              <a href="https://github.com/calebtuttle" target="_blank" rel="noreferrer" className={linkClasses}>GitHub</a>
              <a href="https://twitter.com/0xCaleb" target="_blank" rel="noreferrer" className={linkClasses}>Twitter</a>
              <a href="https://orcid.org/0000-0002-8469-2221" target="_blank" rel="noreferrer" className={linkClasses}>ORCID</a>
              <a href="https://app.holonym.id/lookup/address/0x2a3a52b3335699c4064f5e13907192de42d89575" target="_blank" rel="noreferrer" className={linkClasses}>Holo</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
