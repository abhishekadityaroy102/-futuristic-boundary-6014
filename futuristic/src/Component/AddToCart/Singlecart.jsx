import { Box, HStack, Image,Text} from '@chakra-ui/react'
import React from 'react'
import {useDispatch} from "react-redux"
import { deleteaddtocart } from '../../Redux/Addtocartcontrol/action'
import {MdDelete} from "react-icons/md"
const Singlecart = ({data}) => {
    const dispatch=useDispatch()
    const handledelete=(id)=>{
        dispatch(deleteaddtocart(id))
    }
  return (
    <div>
        <HStack justifyContent="space-between">
            <HStack>
            <Box>
                <Image marginTop="10px" marginLeft="10px"boxSize="80px" src={data.course_img}></Image>
            </Box>
            <Box textAlign='start'>
                <Text fontSize="xl" fontWeight="bold">{data.course_name}</Text>
                <Text fontSize="xl" fontWeight="bold">₹ {data.fees}</Text>
            </Box>
            </HStack>
            <Box as="button" onClick={()=>handledelete(data.id)}marginLeft="-15px">
                <MdDelete fontSize="30px" margin="auto"/>
            </Box>
        </HStack>
        
    </div>
  )
}

export default Singlecart