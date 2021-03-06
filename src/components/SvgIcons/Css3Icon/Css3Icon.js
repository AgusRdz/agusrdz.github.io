import PropTypes from 'prop-types'

const Css3Icon = ({ size, ...props }) => {
  return (
    <svg
      className="fill-current p-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size === 'large' ? '4em' : '2em'}
      height={size === 'large' ? '4em' : '2em'}
      {...props}
    >
      <title>CSS3</title>
      <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" />
    </svg>
  )
}

Css3Icon.propTypes = {
  size: PropTypes.oneOf(['normal', 'large'])
}

Css3Icon.defaultProps = {
  size: 'normal'
}

export default Css3Icon
