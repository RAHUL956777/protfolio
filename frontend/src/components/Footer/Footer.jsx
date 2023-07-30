import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import {Link} from "react-router-dom"
import {BsGithub,BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hi,👋 my name is Rahul. I am a Full-Stack Web Developer.Specilized in
          MERN stack.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/RAHUL956777/"><BsGithub /></a>
        
        <a href="https://www.linkedin.com/in/rahul-das-277964223/"><BsLinkedin /></a>
        
      </div>
    </div>
  );
};

export default Footer;
