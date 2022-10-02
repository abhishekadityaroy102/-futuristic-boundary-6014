import React from 'react'
import { Box, HStack,Img,Input,InputGroup,InputRightAddon,Popover,PopoverArrow,PopoverBody,PopoverContent,PopoverTrigger,Text, VStack } from '@chakra-ui/react'
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
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutaction } from '../Redux/Authentication/action'
import { confirmAlert } from 'react-confirm-alert'
const NavbarAuth = () => {
  const navigate=useNavigate()
  const {isAuth}=useSelector((state)=>state.Authreducer)
  const dispatch=useDispatch()
  const handlelogout=()=>{
    confirmAlert({
      title:"Confirm to Logout ",
      message:"Are you sure to Logout",
      buttons:[
        {
          label:"Yes",
          onClick:()=>{
            dispatch(logoutaction())
          }
        },
        {
          label:'No',
          // onClick:()=>alert('Click No')
        }
      ]
    })
    // alert("DO YOU WANT TO LOGOUT")
    // dispatch(logoutaction())
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
            <VStack>
             <Box as="button" onClick={()=>navigate("/user-profile")} _hover={{color:"blue"}}>
               <Text>My profile</Text>
              </Box>
               <Box as="button" onClick={handlelogout} _hover={{color:"blue"}}>
                <Text>Logout</Text>
            </Box>
            </VStack>
      </PopoverBody>
    </PopoverContent>
  </Popover>
            </Box>

    </div>
  )
}

export default NavbarAuth