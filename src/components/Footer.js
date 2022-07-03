import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const linkClasses = "px-3 hover:text-orange-600 duration-300"

export default function Footer() {
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
