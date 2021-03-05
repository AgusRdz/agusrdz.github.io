import PropTypes from 'prop-types'

const Chip = ({ value }) => {
  return (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-gray-700 border border-gray-300">
      <div className="text-xs font-normal leading-none max-w-full flex-initial">
        {value}
      </div>
    </div>
  )
}

Chip.propTypes = {
  value: PropTypes.string.isRequired
}

export default Chip
