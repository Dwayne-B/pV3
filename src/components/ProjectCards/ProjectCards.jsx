import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProjectCard = styled.div`
{
  color:white;
width:100%;
height:15rem;
margin:3em .25em;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-size:cover;
box-shadow:grey 0px 5px 10px 0px;

background-position:center;
background-repeat:no-repeat;







}


.overlay{
  height:100%;
  width:100%;
  background-color:rgba(37,39,40,.75);
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;







}
`




export default function ProjectCards({title,img,gitUrl,demoUrl}) {

  
  // const [pImg ,setImg ] = useState();
  // setImg(img);
  return (
    <ProjectCard style={{backgroundImage:`url('${img}')`}}>

<div className="overlay">

<h4>{title}</h4>
      {/* <span>icon // icon</span> */}
     <span> 
      <a href={demoUrl}>
        <button className='button'>Demo</button> 
        </a>
        <a href={ gitUrl}>
        <button className='button'>Code</button> 
        </a>
      </span>

</div>


    </ProjectCard>
  )
}
