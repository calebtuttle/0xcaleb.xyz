import React, { ReactNode } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import TransitionWrapper from './TransitionWrapper'
import Diamond from '../components/Diamond'

export default function Page({ children, variants, title, subtitle }) {
  return (
    <>
      <div className="h-8 xl:h-12"></div>
      <div className="flex flex-wrap content-evenly justify-center ...">
        <div className="flex flex-wrap place-items-start ...">
          <div className="max-w-5xl">
            <h1 className="text-center text-5xl font-serif">
              {title || "Caleb Tuttle"}
            </h1>
            <div className="h-2 xl:h-4"></div>
              <h2 className="text-center text-2xl font-serif">
                <em>{subtitle || "Backend Web3 Developer"}</em>
              </h2>
              <center>
                <Diamond />
              </center>
              <TransitionWrapper variants={variants} >
                {children}
              </TransitionWrapper>
          </div>
        </div>
      </div>
    </>
  )
}
