import ChevronUpIcon from 'components/SvgIcons/ChevronUpIcon/ChevronUpIcon'
import React, { useEffect, useState } from 'react'

const ScrollTop = () => {
  const [show, setShow] = useState(false)
  const handleScroll = () => setShow(() => window.pageYOffset > 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div
      className={`rounded-full bg-gray-400 fixed bottom-5 right-1 cursor-pointer hover:bg-gray-600 ${
        show ? '' : 'hidden'
      }`}
      onClick={handleClick}
    >
      <ChevronUpIcon />
    </div>
  )
}

export default ScrollTop
