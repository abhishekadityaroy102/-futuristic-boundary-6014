import { Box, HStack,Popover,PopoverArrow,PopoverBody,PopoverContent,PopoverTrigger,Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbarbox = () => {
    const navigate=useNavigate()
  return (
    <div>
        <HStack>
            <Box as="button" onClick={()=>navigate("/")}>
                <Text>Home</Text>
                
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
            <Box as="button" onClick={()=>navigate("/blogs")}>
                <Text>Blogs</Text>
                
            </Box>
            
        </HStack>
    </div>
  )
}

export default Navbarbox