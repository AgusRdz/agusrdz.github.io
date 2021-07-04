import PropTypes from 'prop-types'

const Card = ({ children }) => {
  return (
    <div className="p-4 m-2 bg-true-gray-200 dark:bg-true-gray-900 shadow-black rounded-md  dark:text-white">
      {children}
    </div>
  )
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Card.defaultProps = {
  url: ''
}

export default Card
