import React, { Fragment } from 'react'
import AlgoliaIcon from 'components/SvgIcons/AlgoliaIcon'
import AngularIcon from 'components/SvgIcons/AngularIcon'
import AwsIcon from 'components/SvgIcons/AwsIcon'
import ChromeIcon from 'components/SvgIcons/ChromeIcon'
import ConfluenceIcon from 'components/SvgIcons/ConfluenceIcon'
import Css3Icon from 'components/SvgIcons/Css3Icon'
import DatabaseIcon from 'components/SvgIcons/DatabaseIcon'
import DockerIcon from 'components/SvgIcons/DockerIcon'
import EdgeIcon from 'components/SvgIcons/EdgeIcon'
import GithubIcon from 'components/SvgIcons/GithubIcon'
import GitIcon from 'components/SvgIcons/GitIcon'
import Html5Icon from 'components/SvgIcons/Html5Icon'
import JavascriptIcon from 'components/SvgIcons/JavascriptIcon'
import JenkinsIcon from 'components/SvgIcons/JenkinsIcon'
import JiraIcon from 'components/SvgIcons/JiraIcon'
import LaravelIcon from 'components/SvgIcons/LaravelIcon'
import LinuxIcon from 'components/SvgIcons/LinuxIcon'
import MarkdownIcon from 'components/SvgIcons/MarkdownIcon'
import NodeJsIcon from 'components/SvgIcons/NodeJsIcon'
import NpmIcon from 'components/SvgIcons/NpmIcon'
import PhpIcon from 'components/SvgIcons/PhpIcon'
import ReactIcon from 'components/SvgIcons/ReactIcon'
import SlackIcon from 'components/SvgIcons/SlackIcon'
import SpotifyIcon from 'components/SvgIcons/SpotifyIcon'
import StackOverflowIcon from 'components/SvgIcons/StackOverflowIcon'
import UbuntuIcon from 'components/SvgIcons/UbuntuIcon'
import YarnIcon from 'components/SvgIcons/YarnIcon'

const ICONS = [
  { icon: AlgoliaIcon },
  { icon: AngularIcon },
  { icon: AwsIcon },
  { icon: ChromeIcon },
  { icon: ConfluenceIcon },
  { icon: Css3Icon },
  { icon: DatabaseIcon },
  { icon: DockerIcon },
  { icon: EdgeIcon },
  { icon: GithubIcon },
  { icon: GitIcon },
  { icon: Html5Icon },
  { icon: JavascriptIcon },
  { icon: JenkinsIcon },
  { icon: JiraIcon },
  { icon: LaravelIcon },
  { icon: LinuxIcon },
  { icon: MarkdownIcon },
  { icon: NodeJsIcon },
  { icon: NpmIcon },
  { icon: PhpIcon },
  { icon: ReactIcon },
  { icon: SlackIcon },
  { icon: SpotifyIcon },
  { icon: StackOverflowIcon },
  { icon: UbuntuIcon },
  { icon: YarnIcon }
]

const getRandomFadingEntrance = () => {
  const animations = [
    'animate__fadeInTopLeft',
    'animate__fadeInTopRight',
    'animate__fadeInBottomLeft',
    'animate__fadeInBottomRight'
  ]

  const index = Math.floor(Math.random() * (4 - 0))
  return animations[index]
}

const Skills = () => {
  return (
    <Fragment>
      <div className="text-center">
        <span className="text-2xl">Skills & Tooling</span>
      </div>
      <div className="flex flex-wrap content-start justify-center mt-4">
        {ICONS.map(({ icon: Icon }, index) => (
          <div
            key={index}
            className={`p-1 animate__animated ${getRandomFadingEntrance()}`}
          >
            <Icon size="large" />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Skills
