import React from 'react'
import { Box, HStack,Img,Input,InputGroup,InputRightAddon,Popover,PopoverArrow,PopoverBody,PopoverContent,PopoverTrigger,Text } from '@chakra-ui/react'
import {FaAngleDown} from "react-icons/fa"
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
import { useDispatch, useSelector } from 'react-redux'
import { logoutaction } from '../Redux/Authentication/action'
const NavbarAuth = () => {
  const navigate=useNavigate()
  const {isAuth}=useSelector((state)=>state.Authreducer)
  const dispatch=useDispatch()
  const handlelogout=()=>{
    dispatch(logoutaction())
  }
  return (
    <div>
       <Box>
            
            <Popover trigger='hover' placement='bottom-start' >
               <PopoverTrigger trigger="hover">
                <Box border='2px' borderColor='gray.200'>
                  <HStack>
              <Text>Hi, Abhishek kumar</Text><FaAngleDown/>
              </HStack>
              </Box>
             </PopoverTrigger>
            <PopoverContent>
      
           <PopoverArrow />
          <PopoverBody>
             <Box onClick={()=>navigate("/my_profile")} _hover={{color:"blue"}}>
               <Text>My profile</Text>
              </Box>
               <Box onClick={handlelogout} _hover={{color:"blue"}}>
                <Text>Logout</Text>
            </Box>
      </PopoverBody>
    </PopoverContent>
  </Popover>
            </Box>

    </div>
  )
}

export default NavbarAuth