import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TransitionWrapper from '../components/TransitionWrapper'
import Diamond from '../components/Diamond'
import ProjectsAndSkills from '../components/ProjectsAndSkills'
import Page from '../components/Page'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 500 },
}

export default function Home() {
  return (
    <Page variants={variants}>
      {/* <p className="font-serif">
      Here, text begins. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p> */}
      <ProjectsAndSkills />
    </Page>
  )
}
