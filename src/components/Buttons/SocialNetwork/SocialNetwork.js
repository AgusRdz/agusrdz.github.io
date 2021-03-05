import PropTypes from 'prop-types'

const SocialNetwork = ({ url, children }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  )
}

SocialNetwork.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

SocialNetwork.defaultProps = {
  url: '#'
}

export default SocialNetwork
