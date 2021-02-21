import React from 'react'
import Card from 'components/Card'
import Profile from 'components/Profile'
import 'animate.css/animate.css'
import Skills from 'components/Skills'
import CodingActivity from 'components/CodingActivity'
import Experience from 'components/Experience'

const Home = () => {
  return (
    <div className="grid-rows-1 m-4 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="grid">
          <Card>
            <Profile />
          </Card>
        </div>
        <div className="grid col-span-2">
          <Card>
            <Skills />
          </Card>
        </div>
      </div>
      <div className="grid">
        <Card>
          <Experience />
        </Card>
      </div>
      <div className="grid">
        <Card>
          <CodingActivity />
        </Card>
      </div>
    </div>
  )
}

export default Home
