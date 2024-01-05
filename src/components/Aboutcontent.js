import "./Aboutcontent.css";
import React from 'react';
import { Link } from "react-router-dom"
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
<h1>Who am I?</h1>
<p>Motivated and ambitious third-year Computer Science
student. Possessing strong technical knowledge and a passion for problem-solving,
I aim to contribute to the projects in the field of
computer science. Skilled in Java, Python and C. Eager
to apply my academic expertise and gain practical
experience to make a meaningful impact in the
industry.</p>
<Link to="/contact"><button className="btn">Contact</button></Link>


        </div>
        <div className="right">
<div className="img-container">
<div className="img-stack top">
    <img src={about1} className="img" alt="img1"/>
</div>
<div className="img-stack bottom">
    <img src={about2} className="img" alt="img1"/>
</div>
</div>       
        </div>
    </div>
  )
}

export default Aboutcontent;