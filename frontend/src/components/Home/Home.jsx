import React, { useEffect } from "react";
import * as THREE from "three";
import "./Home.css";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    // creating moon
    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    // cretaing venus
    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;

    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x += constSpeed;
        moon.rotation.y -= constSpeed;

        venus.rotation.x += constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x += constSpeed;
        moon.rotation.y -= constSpeed;

        venus.rotation.x += constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>
      <div className="homeSkill">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces1">
            <img
              src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
              alt="face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
            <img
              src="https://images.unsplash.com/photo-1560507074-b9eb43faab00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
            <img
              src="https://media.istockphoto.com/id/501576389/photo/the-blue-beauty-of-our-galaxy.jpg?s=612x612&w=0&k=20&c=9ONMdcuOe6XGT_VOQhpG5ALAgiykIlBZXRAD78U4bes="
              alt="face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
            <img
              src="https://media.istockphoto.com/id/171149710/photo/venus.jpg?s=612x612&w=0&k=20&c=Xg818UCjSzDgVAlPWnaeAMP_AKCF9RJp_XUSv57WVwo="
              alt="face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
            <img
              src="https://media.istockphoto.com/id/1203815985/photo/planet-mercury-nebula-and-sunlight.jpg?s=612x612&w=0&k=20&c=Y4byEi-mVGL1-m7RY0-e-XGfn7jZCMrxfm-tUx56TJc="
              alt="face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
            <img
              src="https://media.istockphoto.com/id/1133301909/photo/landscape-with-milky-way-galaxy-sunrise-and-earth-view-from-space-with-milky-way-galaxy.jpg?s=612x612&w=0&k=20&c=AbnhmVTU3ZhzuYUGcaJyrdYXECERfwZ4rQm2Mvm3Qu8="
              alt="face1"
            />
          </div>
        </div>
        <div className="qubeShadow"></div>
        <div className="homeSkillBox">
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />
        </div>
      </div>
    </div>
  );
};

export default Home;
