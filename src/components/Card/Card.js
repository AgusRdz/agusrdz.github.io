import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="p-4 m-2 bg-true-gray-200 dark:bg-true-gray-900 shadow-black rounded-md  dark:text-white">
      {children}
    </div>
  )
}

export default Card
