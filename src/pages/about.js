import React from 'react'
import Layout from '../components/layout'

const about = () => {
  return (
    <Layout>
      <div className="content-box clearfix">
        <div className="about-page" style={{ wordWrap: 'break-word' }}>
          <h1>Qualification</h1>
          <p>
            At the heart of who I am lies an unwavering drive to solve problems, perpetually seeking fresh challenges. The complexities of uncertainties, obstacles, constructive criticism, and even failure don't intimidate me - instead, I welcome them. My passion for learning fuels me, propelling me to put in considerable effort. I'd love to say that my character, intellect, and persona are innate gifts, but they are the fruits of relentless hard work, a touch of luck, and the indispensable support I've received from those who have journeyed with me.
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
