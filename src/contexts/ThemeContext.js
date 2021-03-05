import React, { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const themePreferences = window.localStorage.getItem('color-theme')
    if (typeof themePreferences === 'string') {
      return themePreferences
    }
  }

  const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
  if (userMedia.matches) {
    return 'dark'
  }

  return 'dark'
}

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)
    localStorage.setItem('color-theme', theme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  initialTheme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
