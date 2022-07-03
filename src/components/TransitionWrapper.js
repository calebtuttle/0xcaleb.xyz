import React, { ReactNode } from 'react'
import { motion, MotionConfig } from 'framer-motion'

export default function TransitionWrapper({ children, variants }) {
  return (
    <div>
      <MotionConfig>
        <motion.main
          key="main"
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'spring', stiffness: 40 }}
          className=""
        >
            {children}
        </motion.main>
      </MotionConfig>
    </div>
  )
}
