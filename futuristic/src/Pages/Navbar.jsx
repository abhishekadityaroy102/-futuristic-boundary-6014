import React, { useEffect } from 'react'
import { forwardRef } from 'react'
import {NavLink, useSearchParams} from "react-router-dom"
import MainAppRoutes from '../Routes/MainAppRoutes'
import styles from "../Component/Homepage/Navbar.module.css"
import {useState} from "react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,Text,Button,Box, HStack, InputGroup, Input, InputRightAddon, VStack, Image, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,useDisclosure, DrawerCloseButton, Divider
} from '@chakra-ui/react'
import BreadCrumb from './BreadCrumb'
import Navlinkfornavbar from './Navlinkfornavbar'
import {FaBell,FaShoppingCart} from 'react-icons/fa';
import Navbarbox from './Navbarbox'
import { experiencedata, locationdata, useQuerydata } from '../Component/Homepage/useQuerydata'
export const inputstyle={
  width: "100%",
padding: "7px",
border: "1px solid #ccc",
borderRadius: "4px",
resize: "vertical"
}
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [text,settext]=useState({
    job_title:"",
    location:"",
    experience:""
  })
  const [searchParams,setsearchParams]=useSearchParams()
  const inititaljob_title=searchParams.getAll("job_title");
  const initiallocation=searchParams.getAll("location");
  const initialexperience=searchParams.getAll("experience")
  const [job_title,setjob_title]=useState(inititaljob_title[0]||"")
  const [location,setlocation]=useState(initiallocation[0]||"");
  const [experience,setexperience]=useState(initialexperience[0]||"")
  const handlechange=(e)=>{
    const {name,value}=e.target
    settext({...text,[name]:value})
  }
  const handlesearchjobs=()=>{
    setexperience(text.experience)
    setjob_title(text.job_title)
    setlocation(text.location)
    console.log(text)
   
  }
  useEffect(()=>{
    if(location||job_title||experience){
      let params={};
      job_title&&(params.job_title=job_title);
      location&&(params.location=location);
      experience&&(params.experience=experience)
    setsearchParams(params)
    }
  },[job_title,setsearchParams,location,experience])
  const {data}=useQuerydata(text.job_title)
  return (
    <div>
      <div className={styles.Navbar_link_wrap}>
      {/* <div className={styles.Navbar_logo_and_search}>
        <div>
          
        </div>
        <div>
          <label><input placeholder='Search by job skill '></input>Search</label>
         
        </div>
      </div> */}
     <HStack display="flex" justifyContent="space-around">
      <HStack>
        <Box>
       
       <div className={styles.Navbar_logo_wrap}>
       <img src="https://www.shine.com/next/static/images/shine-logo.png"></img>
       </div>
        </Box>
        <Box onClick={onOpen}>
        <InputGroup size='sm'>
    
    <Input placeholder='job title,skills' />
    <InputRightAddon children='Search' />
  </InputGroup>
        </Box>
      </HStack>
      <HStack>
          <Box as="button" bg="white" borderRadius="4px" borderWidth='2px' width="70px" _hover={{bg:"rgb(134,82,255)",color:"white"}}>
           Login
           </Box>
           <Box as="button" bg="rgb(134,82,255)" color="white" borderRadius="4px" width="120px">
            REGISTER
           </Box>
         
           
            <Popover trigger='hover' placement='bottom-start'>
  <PopoverTrigger trigger="hover">
  <Box as="button">
  <FaBell/>
  </Box>
  </PopoverTrigger>
  <PopoverContent >
    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </PopoverBody>
  </PopoverContent>
</Popover>

            
          
          <Box as="button">
             <FaShoppingCart width="50px"/>
          </Box>
      {/* </div> */}
      </HStack>
      </HStack>
      {/* <Divider/> */}
      <div>
        <BreadCrumb/>
      </div>
    <Divider/>
      <div>
      <Navbarbox/>
      </div>
      
    
        
    </div>
    <div>
      <MainAppRoutes/>
      </div>
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
          <DrawerBody>
           <HStack spacing={10}
           marginLeft="40px">
            <Box>
              <Image src="https://www.shine.com/next/static/images/shine-logo.png" boxSize="60px"></Image>
            </Box>
            <Box>
            {/* <Input variant='outline' placeholder='Job title,skills' /> */}
            <input type="text" placeholder='job title,skills'onChange={handlechange} name="job_title" value={text.job_title} list="job_title" style={{...inputstyle}}></input>
            <datalist id="job_title">
              {
                data&&data.map((el)=><option value={el.job_title}></option>)
              }
            </datalist>
             
            </Box>
            <Box>
            <input placeholder='Location' name="location" value={text.location} style={{...inputstyle}}onChange={handlechange} list="location"></input>
           <datalist id="location">
            {
              locationdata.map((el)=><option value={el}></option>)
            }
           </datalist>
            </Box>
            <Box>
            <input placeholder='Experience' name="experience" value={text.experience} style={{...inputstyle}}onChange={handlechange} list="experience"></input><datalist id="experience">
              {
                experiencedata.map((el)=><option value={el}></option>)
              }
            </datalist>
          
            </Box>
            <Box as="button" borderRadius="5px" width="140px" h="40px" bg="rgb(134,82,255)" color="white" onClick={handlesearchjobs}>
             <Text>Search jobs</Text>
            </Box>
            <Box>
              <DrawerCloseButton/>
            </Box>

           </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Navbar