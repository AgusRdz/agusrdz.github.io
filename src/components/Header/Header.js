import React from 'react'
import agusrdz from 'images/agusrdz.png'
import Toggle from 'components/Toggle'

const Header = () => {
  return (
    <div className="bg-black px-7 py-0 shadow-black object-center fixed w-full z-10">
      <img alt="agusrdz" src={agusrdz} className="w-24 object-center" />
      <Toggle />
    </div>
  )
}

export default Header
