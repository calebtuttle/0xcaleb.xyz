import React, { useState } from 'react'
import classNames from 'classnames'
import { useUserSettings } from '../context/UserSettings';
import styles from '../styles/Footer.module.css'

export default function SettingsMenu() {
  const [showSidebar, setShowSidebar] = useState(false);
  const {linkColor, setLinkColor} = useUserSettings()

  function toggleHoverColor() {
    if (!linkColor || linkColor.includes('orange'))
      setLinkColor('blue')
    else if (linkColor.includes('blue')) 
      setLinkColor('orange')
  }

  const linkTextClasses = classNames({
    'italic': true,
    'duration-300': true,
    'hover:text-orange-600': linkColor == 'orange',
    'hover:text-blue-500': linkColor == 'blue',
  })

  return (
    <>
      {/* Open sidebar button */}
      <div>
        <button 
          className={linkTextClasses} 
          onClick={() => setShowSidebar(!showSidebar)}
        >
          Settings
        </button>
      </div>
      {/* Sidebar */}
      <div style={{ backgroundColor: "var(--dark-blue"}} className={`top-0 left-0 min-w-min p-5 fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "-translate-x-full"}`}>
        <div className="z-50">
          <button
            className={linkTextClasses}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            Done
          </button>
        </div>
        <hr/>
        <div className="text-lg py-2">
          <button 
            className={linkTextClasses}
            onClick={toggleHoverColor}
          >
            Toggle link color
          </button>
        </div>
      </div>
    </>
  )
}

