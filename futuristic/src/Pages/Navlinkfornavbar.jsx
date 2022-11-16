import React, { useState } from 'react'
import "../Component/Homepage/Popover.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,MenuList,MenuItem,Menu,
    PopoverAnchor,Text,Button,useDisclosure,MenuButton
  } from '@chakra-ui/react'
import Homepage from '../Component/Homepage/Homepage'
import styles from "../Component/Homepage/Navlinkfornavbar.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import Blog from './Blog'
import Jobs from '../Component/Jobsection/Jobs'
const Navlinkfornavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate=useNavigate()
    const [home,sethome]=useState(false)
    const [jobs,setjobs]=useState(false);
    const [courses,setcourses]=useState(false);
    const [blogs,setblogs]=useState(false)
    
    // feedback: fp02_102 - divide this component into smaller one so that you can make navigation dynamic
  return (
    
    <div className={styles.Navlink_wrap}>
     <NavLink to="/">
      <div>Home</div>
     </NavLink>
     <NavLink>
     <Popover trigger='hover' placement='bottom-start'>
  <PopoverTrigger trigger="hover">
   <Text>Job</Text>
  </PopoverTrigger>
  <PopoverContent>
    {/* <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton /> */}
    <PopoverBody>
       <div className=".Popover_link" onClick={()=>navigate("/search")}>Search</div>
       <div onClick={()=>navigate("/job-search")}>Job</div>
    </PopoverBody>
  </PopoverContent>
</Popover>
     </NavLink>
     <NavLink>
      <div>Courses</div>
     </NavLink>
     <NavLink>
      <div>Blog</div>
     </NavLink>



        <Tabs >
  <TabList>
    <Tab>HOME</Tab>
    <Popover trigger='hover' placement='bottom-start'>
  <PopoverTrigger trigger="hover">
   <Tab>JOB</Tab>
  </PopoverTrigger>
  <PopoverContent>
    {/* <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton /> */}
    <PopoverBody>
       <div className=".Popover_link" onClick={()=>navigate("/search")}>Search</div>
       <div onClick={()=>navigate("/job-search")}>Job</div>
    </PopoverBody>
  </PopoverContent>
</Popover>
<Popover trigger='hover' placement='bottom-start'>
  <PopoverTrigger trigger="hover">
  <Tab>COURSES</Tab>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </PopoverBody>
  </PopoverContent>
</Popover>
    
    <Tab>BLOG</Tab>
  </TabList>
     
  <TabPanels>
    <TabPanel>
      <Homepage/>
    </TabPanel>
    <TabPanel>
    <Jobs/>
    </TabPanel>
    <TabPanel>
     create COURSES
    </TabPanel>
    <TabPanel>
    <Blog/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Navlinkfornavbar
