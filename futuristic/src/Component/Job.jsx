import React from 'react';
import styled from "styled-components";
import { FaLocationArrow ,FaTasks,FaShareAlt,FaBriefcase } from "react-icons/fa";
const Job = () => {
  
  // feedback: fw15_273 - this component is too big(break this component) and you can use constant and JSON file for static data
  // also, move css to different component to keep the component light
  return  <><Jobdetil>
      <Box>
        <Div>
          <span>Premium</span>
          <span>1 week ago</span>
        </Div>
        <H2>DG - Process Developer - Customer Service</H2>
        <Company>
          <span>Genpact India Pvt Ltd.</span>
        </Company>
        <Jobcard>
          <Jobcardlist>
            <span><FaLocationArrow /></span>
            <span>Bangalore</span>
          </Jobcardlist>
          <Jobcardlist>
            <span><FaBriefcase /></span>
            <span>0 to 4 yrs</span>

          </Jobcardlist>
        </Jobcard>
        <Ul1>
          <Li1>Be an Early Applicant</Li1>
          <Li1>Regular</Li1>
        </Ul1>
        <JobhighLight1>

          <Apply1>
            <Applybutton1>
              <div style={{ fontSize: "15px", fontWeight: "bold", color: "blue" }} >Applied</div>
            </Applybutton1>
          </Apply1>
          <Ul2>
            <Li2>
              <button><FaShareAlt /></button>
            </Li2>
            <Li2>
              <button><FaTasks /></button>
            </Li2>
          </Ul2>
        </JobhighLight1>


      </Box>


    </Jobdetil><Box2>
        <Container1>
          <Container2>
            <Li3>
              <Sp>Job Detail</Sp>
            </Li3>
            <Li3>
              <Sp>Key Skill</Sp>
            </Li3>
            <Li3>
              <Sp>Recruiter Details</Sp>
            </Li3>
          </Container2>
        </Container1>
      </Box2></>


      
  
}

export default Job;



const Box= styled.div`
display:block;
 width:95%;
  height:250px;
  margin-top:10px;
  border:1px solid blue;
  padding: 0;
  margin:auto;
  margin-bottom:15px;
   outline:none;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const Div = styled.div`
display:flex;
align-items: center;
margin-top:5px;
justify-content: space-between;
font-size: 1.2rem;
line-height: 1;
margin-bottom: 10px;
`
const H2= styled.div`
   display:block;
    font-size:1.2rem;
    text-align:start;
    margin:6px 0 0;
    line-height:1.2;
    word-break:break-all;
    font-weight: 700;
    color: #232434;
    box-sizing: inherit;
    outline: none;
   cursor: pointer;
`
const Company= styled.div`
      display:flex;
      align-items:center;
      font-size:1.4rem;
      text-align:start;

`

const Jobcard= styled.div`
  display:flex;
  width:100%;
  margin-top:10px;
  justify-content:flex-start;
 

`
const Jobcardlist= styled.div`
display:flex;
margin-top:10px;
margin-left:15px;
justify-content:flex-start;
`
const Ul1= styled.div`
flex-wrap:unset;
display: flex;
align-items: center;
justify-content: flex-start;
font-size: 1.2rem;
margin: 12px 0 0;
padding: 0;



`
const Li1=styled.div`
padding-bottom: unset;
margin-right: 15px;

`


const Ul2= styled.div`
flex-wrap:unset;
display: flex;
align-items: center;
justify-content: flex-start;
font-size: 1.2rem;
margin: 12px 0 0;
padding: 0;



`
const Li2=styled.div`
padding-bottom: unset;
margin-right: 15px;

`
const Applybutton1= styled.div`
display: flex;
align-items: flex-start;
text-align:start;
justify-content:flex-start;
margin-top: 10px;


`

const JobhighLight1= styled.div`
   display:flex;
   justify-content:space-between;


`
const Apply1= styled.div`
align-items:flex-start;

`
const Jobdetil=styled.div`

  width:100%;
  position:relative;
`
//  border:1px solid green;
const Box2=styled.div`
   width:95%;
 
   margin:auto;
   scroll-behavior: smooth;
 
`
const Container1= styled.div`
box-sizing: inherit;
outline: none;
width: 100%;
    padding-right: 1.5rem;
    margin-right: auto;
    margin-left: auto;
`

const Container2= styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
padding: 1.5rem;
font-size: 1.6rem;
height:25px;
width: 100%;

`
const Li3 = styled.div`
margin-right: 3rem;
font-size: 1.6rem;
border-bottom: 2px solid transparent;
position: relative;
flex-shrink: 0;

`

const Sp= styled.div`
box-sizing: inherit;
outline: none;
color: #38404c;
cursor: pointer;
padding-bottom: 3px;
font-weight: 700;
border-bottom: 2px solid #8652ff;
`
//border: 1px solid #ececec;
