import React from 'react'
import styled from 'styled-components'
const Blog = () => {
  return (
    // navbar
    <>
    
      <Container>
        <Left>
          <div>Explore Categories</div>
          <div>Digital Marketing</div>
          <div>Six Sigma</div>
          <div>Project Management</div>
          <div>Big Data</div>
          <div>IT Software</div>
          <div>Data Science</div>
          <div>cloud Computing</div>
          <div>Analytics Vidhya</div>
        </Left>
        <Right></Right>
      </Container>
      {/* Home */}
      <Box>
         




      </Box>
      
      
      
      </>




  )
}

export default Blog;

const Container= styled.div`
display:flex;
justify-content:space-between;
   width:100%;
   height:50px;
   background-color:#e7e7e7;
   border-color: #e7e7e7;
`
const Left= styled.div`
display:flex;
justify-content:space-between;
  flex:8;
margin : auto;



  `
  const Right = styled.div`
     margin:auto;
     flex:2;
  `

const Box= styled.div`
   width:100%;
   height:400px;
   border:1px solid teal;


`
/*
https://static1.shine.com/l/m/images/blog/Banking-interview-questions-answers.jpg
https://static1.shine.com/l/m/images/blog/How-to-Write-A-Goodbye-Mail-On-Last-Working-Day.jpg
https://static1.shine.com/l/m/images/blog/request-for-relieving-letter-after-resign.jpg


https://static1.shine.com/l/m/images/blog/leave_application_for_office_banner.jpg
https://static1.shine.com/l/m/images/blog/MicrosoftTeams-image_2.png
https://static1.shine.com/l/m/images/blog/marriage_leave_application.jpg

https://static1.shine.com/l/m/images/blog/bpo_interview_questions_answers_banner.jpg
https://static1.shine.com/l/m/images/blog/Profile_Summary_for_freshers.png
https://static1.shine.com/l/m/images/blog/marriage_leave_application.jpg

*/