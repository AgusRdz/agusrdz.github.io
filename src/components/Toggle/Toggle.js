import React, { useContext } from 'react'
import { ThemeContext } from 'contexts/ThemeContext'
import DarkModeIcon from 'components/SvgIcons/DarkModeIcon'
import LightModeIcon from 'components/SvgIcons/LightModeIcon'

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  console.log({ theme })
  const isDark = () => theme === 'dark'
  console.log(isDark())
  const handleChange = () => {
    console.log('clicked')
    setTheme(isDark() ? 'light' : 'dark')
  }

  if (isDark()) {
    return (
      <span className="absolute right-6 top-1/3" onClick={handleChange}>
        <LightModeIcon />
      </span>
    )
  }

  return (
    <span className="absolute right-6 top-1/3" onClick={handleChange}>
      <DarkModeIcon />
    </span>
  )
}

export default Toggle
