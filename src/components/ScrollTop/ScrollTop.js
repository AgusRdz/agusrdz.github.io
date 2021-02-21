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
      className={`rounded-full border bg-white fixed shadow-black bottom-3 right-3 cursor-pointer hover:bg-gray-600 ${
        show ? '' : 'hidden'
      }`}
      onClick={handleClick}
    >
      <ChevronUpIcon />
    </div>
  )
}

export default ScrollTop
