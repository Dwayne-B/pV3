import styled from "styled-components"
const ContactContainer = styled.div`

text-align:center;
padding:3em;

small{
  display:block;
  margin-top:1.5em;
}
`




export default function ContactSection() {
  return (
    <ContactContainer id="Contact">

<h3>Did you enjoy my work? Let's get in contact!</h3>

<a href="mailto:dwaynebynumtech@gmail.com">




dwaynebynumtech@gmail.com

</a>
<small ><a href="#">back to top</a></small>
    </ContactContainer>
  )
}
