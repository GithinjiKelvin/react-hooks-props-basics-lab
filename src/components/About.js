import React from "react";
import Links from "./Links";
import Bio from "./Bio";

function About(props) {
  
  
  

  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{props.bio}</p> */}
      <Bio bio = {props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {/* <h3>Links
        <a href={props.links.github}>{props.links.github}</a>
        <a href={props.links.linkedin}>{props.links.linkedin}</a>
        
      </h3> */}
      <Links/>
    </div>
  );
}

export default About;
