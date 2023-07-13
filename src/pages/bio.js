import React from 'react';
import Layout from '../components/layout';

const Bio = () => {
  return (
    <Layout>
      <div className="content-box clearfix">
        <div className="about-page">
          <h1>Biography</h1>
          <p className="sub">
            “Understanding someone's journey is the best way to truly know them.”
          </p>
          <h2>My Journey</h2>
          <p>
            My interest in technology sparked when I got a Commodore 64 in 5th grade. This led to a life-long fascination with understanding how things work. However, due to some unconventional behaviors, I was distanced from computers until adulthood, filling my time with competitive swimming instead.
          </p>
          <h2>Early Adulthood</h2>
          <p>
            I struggled with social skills in high school. To overcome this, I chose hairdressing - a career that demands strong communication. This decision proved fruitful as I honed my skills and got opportunities to work with industry giants. During this phase, I also started a family.
          </p>
          <h2>University</h2>
          <p>
            Having built confidence in my social skills, I ventured back to my first love - academia. I pursued a degree in Chemistry, where I could indulge my passions for science, math, and computers. Post-graduation, I worked as a chemist and laboratory technician.
          </p>
          <h2>Starting a Business</h2>
          <p>
            Leveraging my unique skill sets in Chemistry and Hairdressing, I established a business specializing in hair color. Throughout this, my fondness for computers persisted, and I found joy in creating digital solutions for my business.
          </p>
          <h2>Pivoting Careers</h2>
          <p>
            After over two decades juggling roles as a Chemist, Hairdresser, and business owner, I returned to the world of computers in 2012. Instead of traditional education, I pursued knowledge independently, networking with industry leaders, and self-studying programming languages and tools.
          </p>
          <h2>Current Focus</h2>
          <p>
            Now, my journey has brought me to the intersection of drones, computer vision, and AI, echoing my childhood fascination with computers. I am currently involved in projects with ArduPilot, OpenCV, and Pytorch. Please check out my projects page for more details.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Bio;
