import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const Skelleton = () => {
  return (
    <Box padding='10' boxShadow='xl' bg='white' size="2xl">
    <SkeletonCircle size='10' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' />
  </Box>
  )
}

export default Skelleton