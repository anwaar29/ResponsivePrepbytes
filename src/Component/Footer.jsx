import React from 'react'
import './All2.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
    faYoutube,
    
  } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
   <>
   <div className='footer'>
     <div className='f one'>
             <li>Follow Us</li><br/>
             <li>
             <FontAwesomeIcon icon={faFacebook} size="2x" color='blue'/>&nbsp;&nbsp;
             <FontAwesomeIcon icon={faLinkedin} size="2x" color='darkblue' />&nbsp;&nbsp;
             <FontAwesomeIcon icon={faYoutube} size="2x"  color='red'/>&nbsp;&nbsp;
             <FontAwesomeIcon icon={faInstagram} size="2x"  color='darkred'/>&nbsp;&nbsp;
             </li><br/>
             <li>Contact Us</li><br/>
            <li> +91-125498722</li>
            <li>-support@PrepBytes.com</li>
            
        
    </div>
    <div className='f two'>
    <li>QUICK LINKS
            </li><br/>
            <li>interview Notes</li>
            <li>Mock Tests</li>
            <li>Placement Program</li>
            <li>Coding Test</li>
            <li>About Us</li>
            <li></li>
            <li>Blog</li>
    </div>
   
   </div>
   <hr  className='hr'/>
   <div className='last'>
    <span>Copyright@2022</span>
    <span>Privacy Policy</span>
    <span>Refund Policy</span>
    <span>Term of Use</span>
   </div>
   </>
  )
}

export default Footer