import Project from 'components/Project'
import React, { Fragment } from 'react'

const Experience = () => {
  return (
    <Fragment>
      <div className="text-center mb-4">
        <span className="text-2xl">Experience</span>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Project
          name="BrandVerge"
          role="Lead Developer"
          url="https://app.gobrandverge.com"
        >
          <p>
            At BrandVerge, my main role was to take a legacy project based on
            AngularJS, PostgreSQL, and NodeJS 6 and develop the new features
            required by end users as quickly as possible due to the previous
            team releasing a feature around 3-4 months. After inspecting the
            code and its versioning strategy, we were able to detect
            duplications and unhandled errors that were resolved as patches or
            hot-fixes, then through continuous delivery strategies the platform
            delivered at least one new feature per week. Once the necessary
            features were created to give stability, I made a migration plan to
            React and NodeJS 12, this change implied a complete redesign of the
            front-end and the refactoring of some parts of the API, where the
            use of Docker was also implemented to create the production, staging
            and development environments and some AWS services like Lambda to
            perform some very specific tasks like error notifications directly
            to Slack.
          </p>
          <br />
          <p>
            As backend developer I created endpoints using the proper HTTP verb
            to each one, middleware, helpers and modules and as frontend
            developer I created a lot of React components try to make them
            flexible and reusable taking care of the usability and the
            responsive design.
          </p>
        </Project>
        <Project
          name="CopyPress"
          role="Web Developer"
          url="https://www.keywordjuicer.com"
          active={false}
        >
          <p>
            I worked as Full -Stack developer creating different web
            applications based on Laravel 5.5, MySQL, NGINX web server and
            Redis. Each application is a specialized tool for SEO and Marketing
            analysis. The main application is called Keyword Juicer which
            includes the implementation of R language and Python scripting to
            make big data analysis, recurrent payments via Stripe and a custom
            ticketing system with real- time notifications.
          </p>
        </Project>
        <Project name="Roam" role="Web Developer" url="" active={false}>
          <p>
            In this project I was in charge of managing the API development also
            I created some features to handle the authentication process and
            other stuff, this API was to consume the web services from the
            mobile application and web administration panel, within this project
            I worked with Laravel 5.4 and Postgres SQL, later my team did an
            elastic search integration for data analysis to optimize the search
            algorithms.
          </p>
        </Project>
        <Project
          name="Guavo"
          role="Web Developer"
          url="https://goguavo.com"
          active={false}
        >
          <p>
            I collaborated in the development of the API to provide the
            functionalities required by the mobile application, all through the
            use of NodeJS 6 and MongoDB 3.2, in addition one of my tasks was to
            make sure that the team of developers made each functionality
            throughTest Driven Development and the ECMAScript 6 standard.
          </p>
        </Project>
        <Project
          name="Ticket To Go"
          role="Web Developer"
          url="https://www.tickettogo.com.mx"
        >
          <p>
            I participated in the development of some modules for user
            administration, in addition I created some scripts in Javascript to
            improve the user experience.
          </p>
        </Project>
        <Project
          name="Boatsetter"
          role="Web Developer"
          url="https://www.boatsetter.com/"
        >
          <p>
            In this project, I used Laravel 5.3 to do a migration of the old web
            site made in Zend Framework, within the technologies used are
            Bootstrap 3, jQuery, MySQL 5.7, third party APIs like Pusher and
            NumVerify, applying Test Driven Development, the principles of
            SOLID, under the methodology of Scrum with collaborative work in
            repositories of GitHub. In addition, I developed APIs with Lumen 5.3
            that are consumed from the main website, which allows the persistent
            login between all the applications that contain the same domain, in
            addition this API uses JSON Web Tokens to carry out the
            authorization of the users and share your data safely. Another of my
            tasks was to support the team fixing issues on the old Zend
            Framework 2 based website.
          </p>
        </Project>
        <Project
          name="FutureED Auth"
          url="https://auth.futureed.com"
          role="Web Developer"
        >
          <p>
            Using Laravel 5.2 I developed an application capable of authorize
            and authenticate (OAuth 2) users throughout the educational platform
            FutureED, this application has a set of API&apos;s that manages user
            permissions and console developers in which they can request access
            credentials to use the services of third- party applications
            platform. Social networks involved: Facebook, Twitter, LinkedIn and
            Google+.
          </p>
        </Project>
        <Project
          name="FutureED Market"
          url="https://market.futureed.com"
          role="Web Developer"
        >
          <p>
            I worked helping in the integration of user authentication, bug
            fixes, creating API’s for intercommunication with the LMS FutureED.
          </p>
        </Project>
        <Project
          name="FutureED Social"
          url="https://social.futureed.com"
          role="Web Developer"
        >
          <p>
            I collaborated on this project creating a real-time chat via sockets
            using NodeJS, my main function was to create the logic for display
            the sent and received message on the chat window, and a system of
            ordering chats similar to Facebook. Cross browser support; all using
            Javascript.
          </p>
        </Project>
      </div>
    </Fragment>
  )
}

export default Experience
