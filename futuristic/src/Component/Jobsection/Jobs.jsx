import React from 'react'
import styled from "styled-components"
import { FaPen ,FaLocationArrow ,FaTasks,FaShareAlt,FaBriefcase,FaAngleDown ,FaRegBookmark} from "react-icons/fa";

const Job = () => {

  
  return (

    <Gcontainer>
      { /* job initial stage  */}
      <Container>
        <Row>

          <Heading>
              <h1>12 Software Developer ... </h1>
              <Aligncenter>
                <Iconsection>
                     <Pen><FaPen/></Pen>
                     <Bookmark><FaRegBookmark/></Bookmark>
                </Iconsection>

              </Aligncenter>
          </Heading>
            <Filter>
              <Filter1>Filter By</Filter1>
              <Filterlist>
                <Unorderlist>
                  <List>
                    <Filterbutton >Location</Filterbutton>
                     <Arrow><FaAngleDown/></Arrow>
                  </List>
                  <List>
                    <Filterbutton>Experience</Filterbutton>
                    <Arrow><FaAngleDown/></Arrow>
                  </List>
                  <List>
                    <Filterbutton>Salary</Filterbutton>
                    <Arrow><FaAngleDown/></Arrow>
                  </List>
                  <List>
                    <Filterbutton>more filters</Filterbutton>
                    <Arrow><FaAngleDown/></Arrow>
                  </List>
                </Unorderlist>

              </Filterlist>
            </Filter>
        </Row>
        <Row>
            <Selectcomp>
                    <Span>Select Company</Span>
                    <Ul>
                      <Li>
                        <Button>Xoriant</Button>
                      </Li>
                      <Li>
                        <Button>Genpact</Button>
                      </Li>
                    </Ul>
            </Selectcomp>
        </Row>
        </Container>

        {/* second stage display data */}

        <Secondcontainer>
          <Left  >
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
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>0 to 4 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span></span>
                    <span>3 days ago</span>
                  </Div>
                  <H2>Hiring for Python/AWS Developer</H2>
                  <Company>
                      <span>GFL RECRUITMENT PRIVATE LIMITED</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>2 to 4 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Regular</Li1>
                      <Li1>5 Position</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span></span>
                    <span>1 month ago</span>
                  </Div>
                  <H2>Jr. Software Engineer</H2>
                  <Company>
                      <span>Xoriant Solutions Pvt Ltd</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>2 to 4 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span>Premium</span>
                    <span>1 week ago</span>
                  </Div>
                  <H2>Working profile for Consultant -Campus Fresher</H2>
                  <Company>
                      <span>Genpact India Pvt Ltd.</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>3 to 6 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span>Premium</span>
                    <span>1 week ago</span>
                  </Div>
                  <H2>Senior Software Engg</H2>
                  <Company>
                      <span>Xoriant Solutions Pvt Ltd.</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>2 to 3 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span></span>
                    <span>1 montth ago</span>
                  </Div>
                  <H2>Quant Strategist/Developer/Researcher - Quantitative Tr ...</H2>
                  <Company>
                      <span>Madison Cube Recruitment</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>0 to 4 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span></span>
                    <span>3 days ago</span>
                  </Div>
                  <H2>Aem Developer</H2>
                  <Company>
                      <span>Aem Developer Ltd.</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>3 to 6 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span></span>
                    <span>5 days ago</span>
                  </Div>
                  <H2>Apple iOS Corporate Trainer - SWIFT/Objective C</H2>
                  <Company>
                      <span>Sportism</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>3 to 4 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span></span>
                    <span>2 week ago</span>
                  </Div>
                  <H2>Hiring for Asp.net Developer</H2>
                  <Company>
                      <span>Space Consultant..</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>2 to 4 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span></span>
                    <span>2 week ago</span>
                  </Div>
                  <H2>ASP.Net Developer</H2>
                  <Company>
                      <span>Space Consultant..</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>1 to 3 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span></span>
                    <span>1 month ago</span>
                  </Div>
                  <H2>Senior Java Technical Manager</H2>
                  <Company>
                      <span>Xoriant Solutions Pvt Ltd</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>2 to 5 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
                <Box>
                  <Div>
                    <span></span>
                    <span>1 month ago</span>
                  </Div>
                  <H2>Wordpress Developer (freshers)</H2>
                  <Company>
                      <span>Vish International</span>
                  </Company>
                    <Jobcard>
                        <Jobcardlist> 
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
                           <span>2 to 4 yrs</span> 
                           
                           </Jobcardlist>
                    </Jobcard>
                    <Ul1>
                      <Li1>Be an Early Applicant</Li1>
                      <Li1>Regular</Li1>
                    </Ul1>
                    <JobhighLight>
                        <span></span>
                        <Apply>
                          <Applybutton>
                            <button>Apply</button>
                          </Applybutton>
                        </Apply>
                    </JobhighLight>
                  

                </Box>
          </Left>
          <Right>
             <Jobdetil>
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
                          <span><FaLocationArrow/></span>
                          <span>Bangalore</span>
                          </Jobcardlist>
                          <Jobcardlist>
                          <span><FaBriefcase/></span>
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
                            <button>Apply</button>
                          </Applybutton1>
                        </Apply1>
                        <Ul2>
                          <Li2>
                            <button><FaShareAlt/></button>
                          </Li2>
                          <Li2>
                            <button><FaTasks/></button>
                          </Li2>
                        </Ul2>
                    </JobhighLight1>
                  

                </Box>


             </Jobdetil>

             <Box2>
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
             </Box2>


        {/* Job description */}
         <Rightdetail>
          <h3>Job Details</h3>
          <Jobdetailtext>
              <span>
                <h4>Job Description</h4>
                  <ul>
                    <li>
                    Positions: 2
                    </li>
                      <li>Experience: 1 Year</li>


                  </ul>
                    <p>                    
                      We have urgent requirements for PHP website Developers
                        <br />
                         Experience: 1- 2 Years
                              <br />
                               Location: Bangalore, BTM Layout
                                <br />
                               Position: Permanent (Work from office)
                                     <br />
                                    Working: 6 days (Sunday fix off)
                                     <br />
                                      No. of Positions: 2
                                      <br />
                                      Job description
                                      <br />
                                      Required Candidate profile
                                      <br />
                                      Hands on coding when mentoring/helping other team members.
                                      <br />
                                      Architect and design software high level and detail design
                                      <br />
                                      Interact with Manager, requirements gathering and clarification
                                      <br />
                                      Take on all challenges of products and projects
                                      <br />
                                      Responsibility for delivery deadlines
                                      <br />
                                      Suggests alternative technical solutions to meet requirements more efficiently
                                      <br />
                                      Consistently delivers high-quality services to our website
                                      <br />
                                      Content changes in website
                                      <br />
                                      Based on Google Page insights Report working closely with website changes
                                      <br />
                                      Mobile friendly website
                                      <br />
                                      Landing Pages Creation
                                      <br />
                                      Page Migration , Creation of New Pages & content Changes
                                      <br />
                                      Candidate should have working experience in creating PHP Pages.
                                      <br />
                                      experience in CSS, HTML5, Bootstrap, jQuery, JavaScript
                                      <br />
                                      Working experience in Google page speed. and seo points
                                      <br />
                                      knowledge on WordPress and plugins to use
                                      <br />
                                      Desired Candidate Profile
                                      <br />
                                      BE/Btech/ BCA 2019 , 2020 , 2021 Pass out with computer science , Engineering or related subject preferred
                                      <br />
                                      Fresher with strong Knowledge in PHP framework
                                      <br />
                                      Familiarity with the following programming languages: PHP, jQuery , JavaScript , HTML , CSS, Bootstrap, Word press



                                                        </p>



                </span>
          </Jobdetailtext>
          <Other>
            <h4>Other Details</h4>
            <Ul4>
              <Li4>
                <span>Department</span>
                <span>   <a href="https://www.shine.com/job-search/application-programming-maintenance-jobs-in-Bangalore">Application Programming / Maintenance</a>   </span>
              </Li4>
              <Li4>
                <span>Industry IT </span>
                <span>   <a href="https://www.shine.com/job-search/recruitment-services-jobs-in-Bangalore">Recruitment Services</a>   </span>
              </Li4>
            </Ul4>
          </Other>
         </Rightdetail>
                 <Key>
                      <h3>Key Skill</h3>
                      <Ul5>
                        <li>
                          <a href="https://www.shine.com/job-search/bootstrap-jobs">bootstrap</a>
                        </li>
                        <li>
                          <a href="https://www.shine.com/job-search/css-jobs">css</a>
                        </li>
                        <li>
                          <a href="https://www.shine.com/job-search/javscript-jobs">javascript</a>
                        </li>
                        <li>
                          <a href="https://www.shine.com/job-search/html-jobs">html</a>
                        </li>
                        <li>
                          <a href="https://www.shine.com/job-search/react-jobs">React</a>
                        </li>
                      </Ul5>
                      <div>More skill</div>
                 </Key>
          </Right>
        </Secondcontainer>
    </Gcontainer>
  )
}

export default Job;
const Gcontainer= styled.div`
  width:80%;
   margin:auto;
   height:100vh;
 
`
const Container= styled.div`
   
   
    box-sizing: inherit;
    outline: none;
`
const Row=styled.div`
display: flex;
flex-wrap: wrap;
margin-right: 0;
margin-left: 0;
box-sizing: inherit;
outline: none;
`
const Heading= styled.div`
  display:flex
  white-space:nowrap
  overflow: hidden;
  box-sizing: inherit;
  outline: none;
`
const Aligncenter = styled.div`
    display:flex
`
const Iconsection = styled.div`
      display:flex;
     padding:3px;
      margin-top:38px;
      margin-left:5px;
      justify-content:space-between
`
const Pen = styled.div`
    margin-left:15px;
    font-size:23px;
`
const Bookmark=styled.div`
     margin-left:15px;
     font-size:23px;
`
// border:2px solid green;  
const Filter= styled.div`
     display:flex;
     padding:23px;
     margin-left: 45px;
     position: relative;
     max-width: 100%;
`
const Filter1= styled.div`
    margin-top:15px;
    font-size:20px;
   

`
const Filterlist= styled.div`
   display:block;
    overflow:hidden;
    height: 34px;
    box-sizing: inherit;
    outline: none;

`
const Unorderlist= styled.div`
margin-left: 15px;
overflow: hidden;
margin-top:15px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
margin-left: 0;
overflow: scroll;
padding-bottom: 15px;


`
// border:1px solid yellowgreen;
const List = styled.div`
   display:flex;
  justify-content:space-between;
  
  margin-left:15px;
  color:black;
  background-color:white;

`
const Filterbutton= styled.div`
     font-size:bold;
     font-weigth:
`
const Arrow= styled.div`
     margin-left:10px;
     margin-top:5px;

`
const Selectcomp= styled.div`
display:flex;
align-items:center;
   width:100%;
   justify-content: flex-start;
   background: #fafaff;
   font-size: 1.2rem;
   position: relative;
   padding: 5px 15px 5px 100px;
   box-sizing: inherit;
   outline: none;
   font-weight: bold;
    line-height: 1.4;
    color: #505e6b;



`
const Span=styled.div`
   left:15px;
   position:absolute;
   box-sizing:inherit;
   outline:none;

`
const Ul= styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
flex-shrink: 0;
margin-left: 25px;

width: 100%;
box-sizing: inherit;
outline: none;


`
const Li=styled.div`
margin: 0.5rem;
flex-shrink: 0;

font-size: 1.2rem;
position: relative;

`
const Button=styled.div`
font-size: 1.2rem;
background: #fff;
border-color: #ececec;
padding:0px 10px ;
margin-left:35px;
text-align:center;
height: 2rem;
font-weight: 400;
color: #38404c;
`
const Secondcontainer= styled.div`
    border:2px solid blue;
     display:flex;
`
const Left= styled.div`
  flex:30%;
  height:700px;
  margin-left:5px;
  border:2px solid brown;
  overflow:scroll;
  white-space: normal;

`
const Right= styled.div`
flex:70%;
height:100vh;
border:2px solid violet;
overflow:scroll;
white-space:normal;
margin-left:20px;
`
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
const JobhighLight= styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

const Apply= styled.div`
display: flex;
flex-wrap:nowrap;
align-items: center;
justify-content: space-between;
margin-top: 10px;

`

const Applybutton= styled.div`
align-items: center;
justify-content: flex-end;

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

const Box2=styled.div`
   width:95%;
   border:1px solid green;
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

const Rightdetail=styled.div`
text-align: start;
box-sizing: inherit;
outline: none;
margin-bottom: 20px;
background-color: #fff;
border: 1px solid #ececec;
width: 100%;
padding: 1.5rem;
box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
position: relative;
font-family: PT Sans,sans-serif;
font-size: 1.5rem;
font-weight: 400;
overflow-x: hidden;
padding: 0;
white-space: pre-wrap;
line-height: 1.5;
color: #505e6b;
`

const Jobdetailtext= styled.div`
font-family: PT Sans,sans-serif;
box-sizing: inherit;
    outline: none;
    display: block;


`
const Other= styled.div`
font-size: 1.5rem;
box-sizing: inherit;
outline: none;



`
const Ul4= styled.div`
font-size: 1.5rem;
box-sizing: inherit;
    outline: none;

`
const Li4 = styled.div`
   display: flex;
    padding: 3px 0;
    font-size: 1.5rem;

`

const Key=styled.div`
text-align:center;
margin-bottom: 20px;
background-color: #fff;
    border: 1px solid #ececec;
    width: 100%;
    padding: 1.5rem;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
    position: relative;

`
const Ul5= styled.div`
margin: 10px 0;
display: flex;
flex-wrap: wrap;


`