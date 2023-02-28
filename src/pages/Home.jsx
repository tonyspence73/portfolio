import React from 'react'
import "../styles/Home.css"
import TypeWriterEffect from 'react-typewriter-effect';
function Home() {
  return (
    <div className = "Home">
      <div className='Name'><h1><b>Anthony Spence-VanderBeke</b></h1></div>
      <div className = "About">
      <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={100}
            cursorColor="black"
            text="Hi, I'm Tony, and I am a Full Stack Web Developer!"
            typeSpeed={70}
            scrollArea={Home.jsx}
           
          />
        {/* <h1>Hi, I go by Tony and I am a Fullstack Web Developer</h1> */}
        <p id = "smallAbout">I excel by communicating well with clients so their users have the best UI experience possible,
         while demonstrating Enthusiam, Adaptablility, Energy, and Creativity. </p>
      </div>
      {/* <div><FaGithub /><FaInstagram /><FaEnvelope /><FaFacebook /></div> */}
      <div id = "image"></div>
 



    </div>
    
  )
}

export default Home