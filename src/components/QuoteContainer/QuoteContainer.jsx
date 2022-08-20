import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const QuoteCnt = styled.div`
margin:3rem 0  4em 0 ;
display
:flex;
flex-direction:column;
justify-content:space-evenly;
border:solid grey 1px;
border-top:none;
border-bottom:none;
min-height:5em;
// max-height:30em;
height:20em;
padding:0em 1.25em 0em 1.25em;
text-align:center;


p{
  font-size:1.25em;
  color:;
  font-weight:300;
  line-height:1.75em;
  margin-bottom:1.25em;
  flex:5;
  
}
 .button{
 

}

`;
export default function QuoteContainer() {
  const randomStart = (num = 24)=>{return  Math.floor(Math.random() *num);
  }
  const [quoteData, setQuote] = useState();
  const [index, setIndex] = useState(randomStart);
  const count= 50;

  const fetchData = async () => {
    const data = await axios(
      `https://goquotes-api.herokuapp.com/api/v1/random?count=${count}`
    );

    setQuote(data.data.quotes);
  
  };

  useEffect(() => {
   
    fetchData();

  }, []);

  return (
    <QuoteCnt>
      
      <p>{quoteData? `${quoteData[index].author} once said, " ${quoteData[index].text}"`:"Server Error, refresh page " }</p>
      <button className='button' onClick={()=>{setIndex(randomStart(quoteData.length))}}>Next Quote!</button>
    </QuoteCnt>
  )
}
