import React from "react";
import "./Projects.css";
import { Button, Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  teachnologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Projects</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {teachnologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [1, 2, 3];

  return (
    <div className="projects">
      <Typography variant="h3">
        Projects
        <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            key={index} // Add a unique key prop for each element in the map function
            url="https://github.com/RAHUL956777/IBMSkillsBuild"
            projectImage="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/11/virtual_milky_way/16487036-1-eng-GB/Virtual_Milky_Way_pillars.png"
            projectTitle="Virtual Galaxy"
            description="This project aims to provide a visually immersive experience of our solar system in a 3D environment. Users can explore the planets, their moons, and other celestial objects in an interactive way."
            teachnologies="html css javascript threejs gsap aos-animation 3d-models"
          />
        ))}
      </div>
      <Typography variant="h3" className="projectHeding" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
