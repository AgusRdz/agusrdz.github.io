import React from 'react'

const LaravelIcon = ({ size = 'normal', ...props }) => {
  return (
    <svg
      className="fill-current p-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size === 'large' ? '4em' : '2em'}
      height={size === 'large' ? '4em' : '2em'}
      {...props}
    >
      <title>Laravel</title>
      <path d="M504.4 115.83a5.72 5.72 0 00-.28-.68 8.52 8.52 0 00-.53-1.25 6 6 0 00-.54-.71 9.36 9.36 0 00-.72-.94c-.23-.22-.52-.4-.77-.6a8.84 8.84 0 00-.9-.68L404.4 55.55a8 8 0 00-8 0L300.12 111a8.07 8.07 0 00-.88.69 7.68 7.68 0 00-.78.6 8.23 8.23 0 00-.72.93c-.17.24-.39.45-.54.71a9.7 9.7 0 00-.52 1.25c-.08.23-.21.44-.28.68a8.08 8.08 0 00-.28 2.08v105.24l-80.22 46.19V63.44a7.8 7.8 0 00-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35 8.35 0 00-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36 9.36 0 00-.72-.94 9.46 9.46 0 00-.78-.6 9.8 9.8 0 00-.88-.68L115.61 1.07a8 8 0 00-8 0L11.34 56.49a6.52 6.52 0 00-.88.69 7.81 7.81 0 00-.79.6 8.15 8.15 0 00-.71.93c-.18.25-.4.46-.55.72a7.88 7.88 0 00-.51 1.24 6.46 6.46 0 00-.29.67 8.18 8.18 0 00-.28 2.1v329.7a8 8 0 004 6.95l192.5 110.84a8.83 8.83 0 001.33.54c.21.08.41.2.63.26a7.92 7.92 0 004.1 0c.2-.05.37-.16.55-.22a8.6 8.6 0 001.4-.58L404.4 400.09a8 8 0 004-6.95V287.88l92.24-53.11a8 8 0 004-7V117.92a8.63 8.63 0 00-.24-2.09zM111.6 17.28l80.19 46.15-80.2 46.18-80.18-46.17zm88.25 60V278.6l-46.53 26.79-33.69 19.4V123.5l46.53-26.79zm0 412.78L23.37 388.5V77.32L57.06 96.7l46.52 26.8v215.18a6.94 6.94 0 00.12.9 8 8 0 00.16 1.18 5.92 5.92 0 00.38.9 6.38 6.38 0 00.42 1 8.54 8.54 0 00.6.78 7.62 7.62 0 00.66.84c.23.22.52.38.77.58a8.93 8.93 0 00.86.66l92.19 52.18zm8-106.17l-80.06-45.32 84.09-48.41 92.26-53.11 80.13 46.13-58.8 33.56zm184.52 4.57L215.88 490.11V397.8l130.72-74.6 45.77-26.15zm0-119.13L358.68 250l-46.53-26.79v-91.42l33.69 19.4L392.37 178zm8-105.28l-80.2-46.17 80.2-46.16 80.18 46.15zm8 105.28V178L455 151.19l33.68-19.4v91.39z" />
    </svg>
  )
}

export default LaravelIcon
