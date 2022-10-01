import React from 'react'
import { Box, HStack,Img,Input,InputGroup,InputRightAddon,Popover,PopoverArrow,PopoverBody,PopoverContent,PopoverTrigger,Text } from '@chakra-ui/react'

// import {Tabs,TabList,Tab,TabPanel,TabPanels} from "@chakra-ui/react"
// import {
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     PopoverHeader,
//     PopoverBody,
//     PopoverFooter,
//     PopoverArrow,
//     PopoverCloseButton,
//     PopoverAnchor,Button
//   } from '@chakra-ui/react'
import Jobs from '../Component/Jobsection/Jobs'
import Profile from '../Component/Profile/Profile'
import AddToCart from '../Component/AddToCart/AddToCart'
import Notification from './Notification'
import ProfileEditpage from './ProfileEditpage'
import { useNavigate } from 'react-router-dom'
const NavbarAuth = () => {
  const navigate=useNavigate()
  return (
    <div>NavbarAuth
      <HStack display="flex" justifyContent="space-around">
        <HStack>
          <div>
            <img src='https://learning.shine.com/_next/image?url=%2Fimages%2Fshine-logo.png&w=1920&q=75'></img>
          </div>
          <div>
          <InputGroup size='md'>
    
    <Input placeholder='job title,skills' />
    <InputRightAddon children='Search' />
  </InputGroup>
          </div>
        </HStack>
        <HStack>
          <Box>
            
          <Popover trigger='hover' placement='bottom-start'>
             <PopoverTrigger trigger="hover">
            <Text>Hi, Abhishek kumar</Text>
           </PopoverTrigger>
          <PopoverContent>
    
         <PopoverArrow />
        <PopoverBody>
           <Box onClick={()=>navigate("/search")} _hover={{color:"blue"}}>
             <Text>My profile</Text>
            </Box>
             <Box onClick={()=>navigate("/job-search")} _hover={{color:"blue"}}>
              <Text>Logout</Text>
          </Box>
    </PopoverBody>
  </PopoverContent>
</Popover>
          </Box>
          <Box>
          <Popover trigger='hover' placement='bottom-start'>
  <PopoverTrigger trigger="hover">
   <Text>Notification</Text>
  </PopoverTrigger>
  <PopoverContent>
    
    <PopoverArrow />
    <PopoverBody>
    <Box onClick={()=>navigate("/user-profile")} _hover={{color:"blue"}}>
        <Text>My profile</Text>
       </Box>
       <Box onClick={()=>navigate("/login")} _hover={{color:"blue"}}>
        <Text>Logout</Text>
       </Box>
    </PopoverBody>
  </PopoverContent>
</Popover>
          </Box>
         <Box onClick={()=>navigate("/cart")}>Add to cart</Box>
        </HStack>
      </HStack>
       <HStack>
            <Box as="button" onClick={()=>navigate("/")}>
                <Text>My Shine</Text>
                
            </Box>
            <Popover trigger='hover' placement='bottom-start'>
  <PopoverTrigger trigger="hover">
   <Text>Job</Text>
  </PopoverTrigger>
  <PopoverContent>
    
    <PopoverArrow />
    <PopoverBody>
     
       <Box onClick={()=>navigate("/search")} _hover={{color:"blue"}}>
        <Text>Search</Text>
       </Box>
       <Box onClick={()=>navigate("/job-search")} _hover={{color:"blue"}}>
        <Text>Jobs</Text>
       </Box>
   
    </PopoverBody>
  </PopoverContent>
</Popover>
           
            <Popover trigger='hover' placement='bottom-start'>
  <PopoverTrigger trigger="hover">
   <Text>Courses</Text>
  </PopoverTrigger>
  <PopoverContent>
    
    <PopoverArrow />
    <PopoverBody>
       <div className=".Popover_link" onClick={()=>navigate("/search")}>Search</div>
       <div onClick={()=>navigate("/job-search")}>Job</div>
    </PopoverBody>
  </PopoverContent>
</Popover>
            <Box as="button" onClick={()=>navigate("/courses")} _hover={{color:"blue"}}>
                <Text>Courses</Text>
                
            </Box>
            <Box as="button" onClick={()=>navigate("/courses")} _hover={{color:"blue"}}>
                <Text>My Order</Text>
                
            </Box>

            <Box as="button" onClick={()=>navigate("/blogs")}>
                <Text>Blogs</Text>
                
            </Box>
            
        </HStack>

    </div>
  )
}

export default NavbarAuth