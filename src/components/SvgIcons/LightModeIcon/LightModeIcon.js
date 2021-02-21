import React from 'react'

const LightModeIcon = ({ size = 'normal', ...props }) => {
  return (
    <svg
      fill="#fff"
      className="p-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      width={size === 'large' ? '4em' : '2em'}
      height={size === 'large' ? '4em' : '2em'}
      {...props}
    >
      <title>Ligth Mode</title>
      <path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z" />
    </svg>
  )
}

export default LightModeIcon
