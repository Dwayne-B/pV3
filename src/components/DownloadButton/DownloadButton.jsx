
import { Link } from "react-router-dom";
import styled from "styled-components";
const Btn = styled.div`

// width:50%;
margin:3em 0 2em 0;
// border:solid green;
text-align:center;



`;

export default function DownloadButton() {
  return (
    <Btn >

<button className='button' >

<Link className='res' to="/resume.pdf" target="_blank" download>Download Resume</Link>
</button>

</Btn>
    

   

  )
}
