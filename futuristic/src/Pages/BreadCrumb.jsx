import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,Text
  } from '@chakra-ui/react'
const BreadCrumb = () => {
  return (
    <div style={{display:"flex",width:"50%",margin:"auto"}} >
        <div>
            <Text>Trending :</Text>
        </div>
        <div>

        
         <Breadcrumb separator='|'>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Node Js</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Full-stack Development</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Finance</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>HR</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
</div>
    </div>
  )
}

export default BreadCrumb