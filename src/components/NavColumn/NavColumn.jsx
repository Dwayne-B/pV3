import { AppShortcut, Article, ContactPhone, Facebook, Person } from '@mui/icons-material';
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DownloadButton } from "../DownloadButton/DownloadButton";
const NavCol= styled.div`

height:fit-content;
background-color:#eee;


grid-column:1/4;


display:flex;
flex-direction:column;


`
const IMG = styled.img`

min-height:22em;
`
const Navigation = styled.nav`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:space-evenly;
background-color:#252728;



a{
 
  padding:1.25rem 1.5rem;
  color:white;
  text-decoration:none;
  display:flex;
  justify-content:space-between;
}
a:nth-child(n+2){
  border-top:solid grey 1px;
}
`;
const SocialLinks = styled.section`
padding: 2rem;
display:flex;
flex-direction:column;
align-items:center;

h3{
  font-weight:100;
}

span {
  // border:solid red ;
  width:8em;
  display:flex;
  justify-content:space-around;

}

`;







export default function NavColumn() {


 

  return (
    <NavCol>
      <IMG src="./naruto.png" alt="" />
      <Navigation>
    
      <a className="navItem" href="/">Home     <Person className='nav-icons'/> </a>
      
      
      <Link className='navItem' to="/resume.pdf" target="_blank" download>Download Resume <Article className='nav-icons'/></Link>
      
      <a   className="navItem" href="#Contact">Contact <ContactPhone className='nav-icons'/></a>
      </Navigation>
      <SocialLinks>
        <h3>Social Links</h3>
        <IconContext.Provider value={{ style: {fontSize: '35px' }
      
      
      
      
      }}>
       <span>
       <a href="https://www.linkedin.com/in/dwayne-bynum-webdeveloper/"><FaLinkedinIn className="icon"  /> </a>
        <a href="https://github.com/Dwayne-B/Dwayne-B"><FaGithubAlt className="icon"  /> </a>
        
       </span>
       </IconContext.Provider>
      </SocialLinks>
    </NavCol>
  )
}
