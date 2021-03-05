import React, { Fragment, useState } from 'react'
import CollapseIcon from 'components/SvgIcons/CollapseIcon'
import ExpandIcon from 'components/SvgIcons/ExpandIcon'
import PropTypes from 'prop-types'
import Chip from 'components/Chip'

const Project = ({ name, role, url, active, technologies, children }) => {
  const [collapsed, setCollapsed] = useState(true)

  const handleClick = () => {
    setCollapsed(() => !collapsed)
  }

  return (
    <div className="bg-white shadow-black dark:shadow-gray overflow-hidden rounded-lg mx-3 h-fit">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {name}
          <span className="float-right cursor-pointer" onClick={handleClick}>
            {collapsed ? <ExpandIcon /> : <CollapseIcon />}
          </span>
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{role}</p>
      </div>
      <div className={`border-t border-gray-200 ${collapsed ? 'hidden' : ''}`}>
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">App site</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {active ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-blue-800 underline"
                >
                  {url}
                </a>
              ) : (
                <span>{url} (inactive)</span>
              )}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Extract</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {children}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Technologies</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex flex-wrap justify-center">
                {technologies.map((technology) => (
                  <Fragment key={technology}>
                    <Chip value={technology} />
                  </Fragment>
                ))}
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  technologies: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

Project.defaultProps = {
  active: true,
  technologies: []
}

export default Project
