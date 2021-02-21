import React from 'react'

const SocialNetwork = ({ url = '#', children }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  )
}

export default SocialNetwork
