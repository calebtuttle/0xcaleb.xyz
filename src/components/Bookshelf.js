import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Bookshelf.module.css'

export default function Bookshelf() {
  const linkClasses = "italic hover:text-orange-600 duration-300"
  return (
    <div className="font-serif">
      
      {/* <div style={{ position: "relative" }}>
        <div className="flex content-evenly justify-start">
          <div className="rotate-90">
            <div className={styles.rectangleVertical}>
              <div className={styles.bookTitle}>
                Book Title
              </div>
            </div>
          </div>
        </div>
      </div> */}
      

      <div style={{ position: "relative" }}>
        <div className="flex justify-start text-orange-600 font-bold text-lg">
          
          <div className={styles.rectangleHorizontal}>
            <div className={styles.bookTitle}>
              <p>Nicomachean Ethics</p>
            </div>
          </div>
          <div className="mx-2"></div>
          <div className={styles.rectangleHorizontal}>
            <div className={styles.bookTitle}>
              <p>Discourses on Livy</p>
            </div>
          </div>
          <div className="mx-2"></div>
          <div className={styles.rectangleHorizontal}>
            <div className={styles.bookTitle}>
              <p>The Prince</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
