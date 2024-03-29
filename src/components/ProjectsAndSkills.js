import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { useUserSettings } from '../context/UserSettings'

export default function ProjectsAndSkills() {
  // const linkClasses = "text-orange-600 hover:underline duration-300"
  const {linkColor} = useUserSettings()

  const linkClasses = classNames({
    'duration-300': true,
    'hover:underline': true,
    'text-orange-600': linkColor == 'orange',
    'text-blue-600': linkColor == 'blue',
  })

  return (
    <div className="font-serif">
      <div className="flex flex-wrap content-evenly justify-start">
        <div className="float-left p-5 text-lg font-light">
          {/* Current work */}
          <p className="underline font-bold text-xl">Current Work</p>
          <ul>
            <li>~ 
              Building&nbsp;
              <a href="https://holonym.id" target="_blank" rel="noreferrer" className={linkClasses}>
                Holonym
              </a>
              , the ZK Passport for Web3
            </li>
          </ul>
          <div className="h-4"></div>
          {/* Projects and Achievements */}
          <p className="underline font-bold text-xl">Projects and Achievements</p>
          <ul>
            <li>~ 
              Completed the&nbsp;
              <a href="https://courses.consensys.net/courses/blockchain-developer-bootcamp-registration-2021" target="_blank" rel="noreferrer" className={linkClasses}>
                ConsenSys Blockchain Developer Bootcamp&nbsp;
              </a>
              (see certificate&nbsp;
              <a href="https://courses.consensys.net/certificates/6n6mblvuor" target="_blank" rel="noreferrer" className={linkClasses}>
                here
              </a>
              )
            </li>
            <li>~ 
              Won the IPFS Storage prize at the&nbsp;
              <a href="https://hedera22.devpost.com/" target="_blank" rel="noreferrer" className={linkClasses}>
                Hedera22&nbsp;
              </a>
              hackathon for our&nbsp;
              <a href="https://devpost.com/software/domain-names-data-economy-in-hedera-and-ipfs" target="_blank" rel="noreferrer" className={linkClasses}>
                project that bridges data from web2 to web3
              </a>
            </li>
            <li>~ 
              Implemented a simple version of Bitcoin in Python (see&nbsp;
              <a href="https://github.com/calebtuttle/localcrypto" target="_blank" rel="noreferrer" className={linkClasses}>
               here
              </a>
              )
            </li>
          </ul>
          <div className="h-4"></div>

          {/* Languages and Skills */}
          <p className="underline font-bold text-xl">Skills</p>
          <ul>
            <li>~ JavaScript, Node.js</li>
            <li>~ React</li>
            <li>~ Ethers.js</li>
            <li>~ Hardhat</li>
            <li>~ Solidity</li>
            <li>~ Python</li>
            <li>~ SQL</li>
            <li>~ AWS</li>
            <li>~ Terraform</li>
          </ul>
          <div className="h-4"></div>

        </div>
      </div>
    </div>
  )
}
