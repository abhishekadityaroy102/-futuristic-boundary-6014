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
    <BreadcrumbLink href='#' style={{
              fontWeight: 'bold',
              color: '#8652ff'
            }}>Node Js</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#' style={{
              fontWeight: 'bold',
              color: '#8652ff'
            }}>Full-stack Development</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#' style={{
              fontWeight: 'bold',
              color: '#8652ff'
            }}>Finance</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='#' style={{
              fontWeight: 'bold',
              color: '#8652ff'
            }}>HR</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
</div>
    </div>
  )
}

export default BreadCrumb