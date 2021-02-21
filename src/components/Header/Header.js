import React, { useState } from 'react'
import agusrdz from 'images/agusrdz.png'
import Toggle from 'components/Toggle'

const Header = () => {
  // const [darkMode, setDarkMode] = useState()
  return (
    <div className="bg-black px-7 py-0 shadow-black object-center fixed w-full">
      <img alt="agusrdz" src={agusrdz} className="w-24 object-center" />
      <Toggle />
    </div>
  )
}

export default Header
