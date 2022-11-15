import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Amountsummary = ({cgst,sgst,pay,total}) => {
  return (
    
        <VStack width="350px" >
            <Box>
                <Text fontSize="2xl" fontWeight="bold" textAlign="start">Order Summary</Text>
            </Box>
            <HStack justifyContent="space-between" width="80%">
                <Box>
                    <Text textAlign="start">Subtotal</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">₹{total}</Text>
                </Box>
            </HStack>
            <HStack width="80%" justifyContent="space-between">
                
                <Box>
                    <Text>SGST @ 9%</Text>
                </Box>
                <Box>
                    <Text fontWeight="semibold">+₹{sgst}</Text>
                </Box>
            </HStack>
           
            <HStack width="80%" justifyContent="space-between">
                <Box>
                    <Text>CGST @ 9%</Text>
                </Box>
                <Box>
                    <Text fontWeight="semibold">+₹{cgst}</Text>
                </Box>
            </HStack>
            <HStack width="80%" justifyContent="space-between">
                <Box>
                    <Text>Total Payable</Text>
                </Box>
                <Box>
                    <Text fontWeight="light">
                    ₹{pay}
                    </Text>
                </Box>
            </HStack>
            <Divider/>
            <HStack width="80%" justifyContent="space-between">
                <Box>
                    <Text>Payable Amount</Text>
                    <Text fontWeight="extrabold">₹{pay}</Text>
                </Box>
                <Box as="button" color="white" bgColor="#8652ff" width="130px" height="44px"borderRadius="5px">
                    <Text fontWeight="semibold">Proceed to Buy</Text>
                </Box>
            </HStack>
        </VStack>
   
  )
}

export default Amountsummary