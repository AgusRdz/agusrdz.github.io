import { Fragment } from 'react'

const CodingActivity = () => {
  return (
    <Fragment>
      <div className="text-center mb-4">
        <span className="text-2xl">Coding Activity</span>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-3 mb-4">
        <figure className="shadow-black dark:shadow-gray">
          <embed src="https://wakatime.com/share/@agusrdz/906c2a54-6764-47e6-9d02-d05d72c4b993.svg"></embed>
        </figure>
        <figure className="shadow-black dark:shadow-gray">
          <embed src="https://wakatime.com/share/@agusrdz/a027fcda-84bc-43ee-ad90-006fda38c7f5.svg"></embed>
        </figure>
      </div>
    </Fragment>
  )
}

export default CodingActivity
