import React from 'react'
import "../styles/Skills.css"
import {FaNodeJs, FaHtml5, FaCss3, FaJs, FaSass, FaBootstrap,FaReact} from "react-icons/fa/index"
import {SiMongodb, SiJquery} from "react-icons/si/index"
function Skills() {
  return (
    <div id = "skillsPage">
      <div id = "grnBack">
      <div className = "skillTitle"><u><i>Front End</i></u>
     
        <div className = "skills">
          <div id = "frontIcons">
        <FaHtml5 /><FaCss3 /><FaJs /><FaBootstrap /><FaSass /><FaReact /><SiJquery />
          </div>
        </div>
      </div>
      <div className = "skillTitle"><u><i>Back End</i></u>
        <div className = "skills">
          <div id ="backIcons">
      <FaNodeJs /><SiMongodb />
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills