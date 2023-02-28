import React from 'react';
import "../styles/Footer.css"
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa/index"
import { Link,useLocation } from "react-router-dom";
function Footer() {
  return (
    <div className= "footer">
        <div id = "icons">
          <a href="https://www.linkedin.com/in/anthony-spence-vanderbeke-bb4163262"><FaLinkedin /></a>
          <a href="https://github.com/tonySpence73"><FaGithub /></a>
          <a href="https://instagram.com/developerspence"><FaInstagram /></a>
          {/* <a href ="https://gmail.com"><FaEnvelope /></a> */}
          <Link to="/contact"><FaEnvelope /> </Link>
        </div>
        <div>
       
        </div>
  </div>
  )
}

export default Footer