import React from 'react'
import "./Footer.css";
import { FaHome ,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>53,shanmuga mudali street</p>
                        <p>Anakaputhur</p>
                    </div>
                    <div className="phone">
                   <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>7397386429</h4>
                    </div>
                </div>
                <div className="email"> <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>varshasuresh1610@gmail.com</h4></div>
                
            </div>



            <div className="right">
            <h4>About me</h4>
            <p>This is Varsha. I am currently purchusing computer science degree at Sri Sairam Engineering College. I enjoy creating web designs. I am currently learning Mern fullstack development</p>
<div className="social"><Link to="https://www.linkedin.com/in/varsha-s-56a142229/">
<FaLinkedin size={30} style={{color:"#fff",marginRight:"2rem"}}/></Link>
</div>


            </div>
        </div>
    </div>
  )
}

export default Footer