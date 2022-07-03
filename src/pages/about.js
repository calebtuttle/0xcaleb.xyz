import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import TransitionWrapper from '../components/TransitionWrapper'
import Diamond from '../components/Diamond'
import Page from '../components/Page'
import headshot from '../../img/Headshot2.jpeg'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 500 },
}

export default function About() {
  return (
    <Page variants={variants}>
      <div className="">
        <div className="float-left mr-5 mb-5">
          <div className={styles.headshot}>
            <Image src={headshot} alt='image' width="200" height="200" />
          </div>
        </div>
        <p className="font-serif">
          Here, text begins. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Page>
  )
}
