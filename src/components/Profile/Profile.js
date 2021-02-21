import React from 'react'
import me from 'images/me.jpeg'
import GithubIcon from 'components/SvgIcons/GithubIcon'
import DevIcon from 'components/SvgIcons/DevIcon'
import LinkedInIcon from 'components/SvgIcons/LinkedInIcon'
import SocialNetwork from 'components/Buttons/SocialNetwork'
import StackOverflowIcon from 'components/SvgIcons/StackOverflowIcon'
import JediOrderIcon from 'components/SvgIcons/JediOrderIcon'

const Profile = () => {
  return (
    <div className="text-center">
      <div className="p-6">
        <img
          src={me}
          alt="me"
          className="rounded-full h-24 w-24 m-auto shadow-black dark:shadow-gray"
        />
      </div>
      <div>
        <div className="flex flex-wrap content-start justify-center mt-4">
          <JediOrderIcon />
          <span className="text-2xl">Agustin Rodriguez</span>
        </div>
      </div>
      <div>
        <p>Lead Developer at ClickIT DevOps & Software Development.</p>
        <small>2015 - present</small>
      </div>
      <div className="flex flex-wrap content-start justify-center mt-4">
        <SocialNetwork url="https://github.com/agusrdz">
          <GithubIcon />
        </SocialNetwork>
        <SocialNetwork url="https://dev.to/agusrdz">
          <DevIcon />
        </SocialNetwork>
        <SocialNetwork url="https://www.linkedin.com/in/agustin-espinoza-rodriguez/">
          <LinkedInIcon />
        </SocialNetwork>
        <SocialNetwork url="https://stackoverflow.com/users/4748128/agus-rdz">
          <StackOverflowIcon />
        </SocialNetwork>
      </div>
    </div>
  )
}

export default Profile
