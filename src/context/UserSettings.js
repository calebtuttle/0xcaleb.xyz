import React, { useState, createContext, useContext } from 'react'

const UserSettingsContext = createContext({})

function UserSettingsProvider({ children }) {
  const [linkColor, setLinkColor] = useState('orange')
  
  return (
    <UserSettingsContext.Provider value={{ linkColor, setLinkColor }}>
      {children}
    </UserSettingsContext.Provider>
  )
}

const useUserSettings = () => useContext(UserSettingsContext)

export { UserSettingsProvider, useUserSettings, UserSettingsContext}
export default UserSettingsProvider
