import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const trapezoidStyles = {
  height: 0, 
  width: "125px", 
  borderBottom: "50px solid #555", 
  borderLeft: "25px solid transparent", 
  borderRight: "25px solid transparent"
}

const triangleStyles = {
  marginTop: "100px",
  height: "80px",
  // background: "llinear-gradient(to bottom right, transparent 50%,#2E252A 51%), linear-gradient(to top right, transparent 50%,#2E252A 51%), linear-gradient(to bottom left, transparent 50%,#1C151B 51%), linear-gradient(to top left, transparent 50%,#1C151B 51%)",
  // backgroundPosition: "0 0,0 100%,100% 0,100% 100%",
  // backgroundSize: "50.3% 50%",
  backgroundRepeat: "no-repeat",
}
// /* Add a black background color to the top navigation */
// .topnav {
//   background-color: #333;
//   overflow: hidden;
// }
// /* Style the links inside the navigation bar */
// .topnav a {
//   float: left;
//   color: #f2f2f2;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
// }
// /* Change the color of links on hover */
// .topnav a:hover {
//   background-color: #ddd;
//   color: black;
// }
// /* Add a color to the active/current link */
// .topnav a.active {
//   background-color: #04AA6D;
//   color: white;
// }

export default function Home() {
  return (
    <div>
      <Head>
        <title>Caleb Tuttle</title>
        <meta name="description" content="Caleb Tuttle's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Begin navbar */}
      <div className={styles.topnavBackground}>
        <div className={styles.topnavContainer}>
          <div className={styles.topnav}>
            <div></div>
            <a href="#home"><em>Home</em></a>
            <a href="#about"><em>About</em></a>
          </div> 
        </div>
      </div>
      {/* End navbar */}

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Caleb Tuttle
          </h1>

          <div className={styles.grid}>
            <h2>
              <em>Backend Web3 Developer</em>
            </h2>
            <p>
              Here, text begins. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          {/* <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div> */}
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </div>
  )
}
