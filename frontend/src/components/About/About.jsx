import React from 'react'
import "./About.css"
import { Typography } from '@mui/material'

const About = () => {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <Typography>This is a sample quotes</Typography>
        </div>
        <div className="aboutContainer2">
            <div>
                <img src="https://avatars.githubusercontent.com/u/77888604?s=400&u=bd2a911d2d55bcb017d0f3953f0b6ae38ba9b3ea&v=4" alt="img" className='aboutAvtar'/>
                
                <Typography variant='h4' style={{margin:"1vmax 0",color:"black"}}>Rahul</Typography>
                <Typography variant='h5'>Full Stack Developer</Typography>
                <Typography style={{margin:"1vmax 0"}}>Open source Contributor</Typography>
            </div>
            <div className='description'>
                <Typography>I am a passionate full-stack web developer with a B.Tech degree in my arsenal. Proficient in creating dynamic and user-friendly web applications, my dedication lies in continuously learning and implementing the latest technologies to deliver exceptional digital experiences.</Typography>
            </div>
        </div>
    </div>
  )
}

export default About
