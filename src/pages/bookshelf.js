import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TransitionWrapper from '../components/TransitionWrapper'
import Diamond from '../components/Diamond'
import ProjectsAndSkills from '../components/ProjectsAndSkills'
import Page from '../components/Page'
import Bookshelf from '../components/Bookshelf'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 500 },
}

export default function BookshelfPage() {
  return (
    <Page variants={variants} title="Bookshelf" subtitle=" " >
      {/* <div className="font-serif">
        <ul>
          <li>~ <em>The Prince</em> by Niccolo Machiavelli</li>
          <li>~ <em>Discourses on Livy</em> by Niccolo Machiavelli</li>
          <li>~ <em>Nicomachean Ethics</em> by Aristotle</li>
          <li>~ <em>Critique of Pure Reason</em> by Immanuel Kant</li>
          <li>~ <em>The Social Construction of Reality</em> by Peter Berger and Thomas Luckmann</li>
        </ul>
      </div> */}
      <Bookshelf />
    </Page>
  )
}
