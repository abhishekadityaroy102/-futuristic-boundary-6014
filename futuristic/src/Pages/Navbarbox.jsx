import { Box, HStack,Popover,PopoverArrow,PopoverBody,PopoverContent,PopoverTrigger,Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../Component/Homepage/Navlinkfornavbar.module.css"
const Navbarbox = ({onclose}) => {
    const navigate=useNavigate()
  return (
    <div className={styles.Navlink_wrap}>
        <HStack display="flex" justifyContent="space-evenly" height="40px">
        <Box as="button" borderBottom="2px" borderBottomColor="white" onClick={()=>navigate("/")} _hover={{borderBottomColor:"blue"}}>
                <Text>Home</Text>
                
            </Box>
            <Popover trigger='hover' placement='bottom-start'>
  <PopoverTrigger trigger="hover">
  <Box as="button" borderBottom="2px" borderBottomColor="white"  _hover={{borderBottomColor:"blue"}}>
    <Text>JOBS</Text>
    </Box>
  </PopoverTrigger>
  <PopoverContent>
    
    <PopoverArrow />
    <PopoverBody>
     
    <Box  borderLeft="2px" borderLeftColor="white" onClick={()=>onclose()} _hover={{borderLeftColor:"blue",color:"blue"}}>
        <Text as="button">Search</Text>
       </Box>
       <Box  borderLeft="2px" borderLeftColor="white" onClick={()=>navigate("/job-search")} _hover={{borderLeftColor:"blue",color:"blue"}}>
        <Text as="button">Jobs</Text>
       </Box>
   
    </PopoverBody>
  </PopoverContent>
</Popover>
           
            <Popover trigger='hover' placement='bottom-start'>
  <PopoverTrigger trigger="hover">
  <Box as="button" borderBottom="2px" borderBottomColor="white"  _hover={{borderBottomColor:"blue"}}>
    <Text>COURSES</Text>
    </Box>
  </PopoverTrigger>
  <PopoverContent>
    
    <PopoverArrow />
    <PopoverBody>
    <Box borderLeft="2px" borderLeftColor="white" onClick={()=>navigate("/courses")} _hover={{borderLeftColor:"blue",color:"white.400"}} >
        <Text as="button">Sales and Marketing</Text>
       </Box>
       <Box borderLeft="2px" borderLeftColor="white" onClick={()=>navigate("/courses")} _hover={{borderLeftColor:"blue"}}>
        <Text as="button">Information and Technology</Text>
       </Box>
       <Box borderLeft="2px" borderLeftColor="white" onClick={()=>navigate("/courses")} _hover={{borderLeftColor:"blue"}} >
        <Text as="button">Operation Managment</Text>
       </Box>
       <Box borderLeft="2px" borderLeftColor="white" onClick={()=>navigate("/courses")} _hover={{borderLeftColor:"blue"}}>
        <Text as="button">View All</Text>
       </Box>

     
    </PopoverBody>
  </PopoverContent>
</Popover>
<Box borderBottom="2px" borderBottomColor="white" onClick={()=>navigate("/courses")} _hover={{borderBottomColor:"blue"}} as="button">
                <Text>Secking Assistance</Text>
                
            </Box>
            <Box borderBottom="2px" borderBottomColor="white" onClick={()=>navigate("/courses")} _hover={{borderBottomColor:"blue"}} as="button">
                <Text>Blogs</Text>
                
            </Box>
            
        </HStack>
    </div>
  )
}

export default Navbarbox