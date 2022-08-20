
import styled from "styled-components";
import ContactSection from '../ContactSection/ContactSection';
import DownloadButton from "../DownloadButton/DownloadButton";
import ProgressBar from '../ProgressBar/ProgressBar';
import ProjectCards from '../ProjectCards/ProjectCards';
import QuoteContainer from '../QuoteContainer/QuoteContainer';

const ContentCol = styled.div`
padding:2rem;
background-color:#eee;

grid-column:4/12;

font-size:1.25rem;

.progress-container{
  display:flex;
  flex-wrap:wrap;
  // flex-direction:column;
  justify-content:space-between;
  
  margin-bottom:3rem;


  // border:solid green 1px;
  
}
.projectCard-container{
  display:flex;
  justify-content:center;
  align-content:center;
  flex-wrap:wrap;

}
@media screen and (max-width: 768px) {
  .progress-container{

    display:flex;
  justify-content:center;
  align-content:center;
  flex-wrap:wrap;
  } 
}
`;

export default function ContentColumn({cardData ,progressBarData}) {


  return (
    <ContentCol >
        <h2 >Interesting Quotes!</h2>
     
       <QuoteContainer/>

      
        <h2>Professional Skills</h2>
        <div  id ='Resume' className="progress-container">
{progressBarData.map((skill,i)=>{
       
          
          return  <ProgressBar title={skill.title} percentage ={skill.percentage}key={i}/>
          
       

})}</div>




<DownloadButton/>

     <h2>Projects</h2> 
     <div className="projectCard-container">
     {   
       cardData.map((project,i)=>{
         return  <ProjectCards key={i}title={project.title} demoUrl={project.demoUrl} gitUrl={project.gitUrl} img = {project.img} />

        })}
     </div>
    


<ContactSection/>
    </ContentCol>
  )
}
