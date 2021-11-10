import React from 'react'
import Layout from '../components/layout'

const about = () => {
  return (
    <Layout>
      <div className="content-box clearfix">
        <div className="about-page">
          <h1>Qualification</h1>
          <p>
            At my core, I am a problem solver, always looking for new
            challenges. I'm not afraid to confront and embrace uncertainties,
            challenges, feedback and failure. I put a lot of effort into
            learning. I wish I could say my character, intelligence, and
            personality were inherent, but they are the result of hard work,
            luck, and the people who have supported me along the way.
          </p>
          <h2>Certificates</h2>
          <p>
            Please see my LinkedIn profile for links to my certificate. <br />{' '}
            <br />
            They include but are not limited to AWS, OpenCV, Matlab
          </p>
          <h2>Skillsets</h2>
          <p>
            They include but are not limited to Python, OpenCV, C++, Linux, Bash
            scripting, Linear Algebra,Calculus, management, and other.
          </p>
          <p></p>
        </div>
      </div>
    </Layout>
  )
}

export default about
