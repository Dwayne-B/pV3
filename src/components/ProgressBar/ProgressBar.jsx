
import styled from 'styled-components';


const Progress = styled.div`

{

  
   width:12em;
  
margin-top:2em;

  
padding:1rem 0;
  
}
@media screen and (max-width: 500px) {
  width:85vw;
  }
 
span {
  border-radius:50px;
  background-color:rgb(100,109,150);
 
  height: 1em;
  
  display: block;
  position:relative;
 
}
small{
  color:white;
 
  font-size:.75em;
  position:absolute;
  right:0;
  padding:.15em .25em 0 0;
}


#dynamic{
  box-shadow:grey 0px 4px 3px 0px;
  margin-top:1em;
  border-radius:50px;
}

`



export default function ProgressBar({percentage,title}) {


// console.log(props);
// console.log( percentage);

  return (
    <div >

<Progress >
<label htmlFor="">{title}</label>
  <div id="dynamic" class="progress-bar progress-bar-success progress-bar-striped active">
    <span id="current-progress" style={{
      width:`${percentage}%`,
    }}>

<small  >{percentage}%</small>

    </span>
  </div>
</Progress>

    </div>

  )
}
// style={{width:`${85}%`}}