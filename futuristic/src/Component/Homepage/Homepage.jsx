import React from 'react';
import { useEffect, useState } from 'react';
import { Box,Input, Image, Flex, Button,Text,} from "@chakra-ui/react";
// import {MdAssessment} from "react-icons/md";
const Homepage = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData]= useState(0);
  // const [counter2, setCounter2] = useState(0);
  // const navigate = useNavigate();


  const nextImage = () => {
    if (counter === craouselData.length - 1) {
      setCounter(-1);
    }

    setCounter((prev) => prev + 1);
  };

  const prevImage = () => {
    if (counter === 0) {
      setCounter(4);
    }

    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === craouselData.length - 1) {
        setCounter(-1);
      }
      // if (counter2 === projectData.length - 1) {
      //   setCounter2(-1);
      // }

      setCounter((prev) => prev + 1);
      // setCounter2((prev) => prev + 1);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <Box>
    {/* crouusel started */}

    <Box position="relative">
      <Image
        boxSize={"450px"}
        objectFit="fill"
        src={craouselData[counter].img}
        alt=""
        width={"100%"}
        className="darken"
      />
     

        <Flex gap={"10px"} mt="0" w="200px" textAlign={"center"}>
          <Input
           
            fontSize={"22px"}
            borderRadius={"50%"}
            h="20px"
            w="20px"
            fontWeight={700}
            border="1px solid white"
            bg={"transparent"}
            _hover={{ color: "black", bg: "white" }}
            onClick={prevImage}
          >
            {/* {"<"} */}
          </Input>
          <Input
            
            borderRadius={"50%"}
            fontSize={"22px"}
            fontWeight={700}
            h="20px"
            w="20px"
            border="1px solid white"
            bg="transparent"
            _hover={{ color: "black", bg: "white" }}
            onClick={nextImage}
          >
            {/* {">"} */}
          </Input>

          <Text fontWeight={600} m={"auto"}>{`${counter + 1} / ${
            craouselData.length
          }`}</Text>
        </Flex>
      </Box>
      <Box   width={"100%"} height={"200px"}>
             <Flex >
                 <Box  display={"flex"} textAlign={"center"} alignItems={"flex-center"} marginLeft={"40%"}>
                  <Box >
                    
                      <Image
                      boxSize={"200px"}
                      objectFit="fill"
                      src="https://static.thenounproject.com/png/2404411-200.png"
                      alt=""
                      height={"40%"}
                      width={"50%"}
                      marginTop={"10px"}
                      marginLeft={"10px"}
                      borderRadius={"80%"}
                      className="darken"
                      
                      />
                    <Text  textAlign={"center"}  >Assement</Text>
                    </Box>
                    <Box>
                    <Image
                      boxSize={"200px"}
                      objectFit="fill"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1tahb6m6Q8rxoG7LkAwYh9rlObqn2N7BzVHGZSwxbVP0-Q54dTykxZW1upTMqv_CW8k&usqp=CAU"
                      alt=""
                      height={"40%"}
                      width={"50%"}
                      marginLeft={"10px"}
                      borderRadius={"80%"}
                      marginTop={"10px"}

                      className="darken"
                      
                      />
                    <Text textAlign={"center"}>Carrer Path</Text>
                    </Box>
                    <Box>
                    <Image
                      boxSize={"200px"}
                      objectFit="fill"
                      src="https://content.thriveglobal.com/wp-content/uploads/2019/06/3B3FD3E1-3116-49C8-83EE-4B237D769E00.jpeg"
                      marginTop={"10px"}
                      alt="dream job"
                      width={"50%"}
                      height={"40%"}
                      marginLeft={"10px"}
                      borderRadius={"80%"}
                      className="darken"
                      
                      />
                    <Text textAlign={"center"}>Dream Job</Text>
                    </Box>
                  </Box>
                 
                 
             </Flex>

      </Box>
    </Box>
  )
}

export default Homepage;
const craouselData = [
  {
    
    img: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FMockinterview_top_companiesD.jpg&w=1920&q=75",
  },
  {
    
    img: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FAmazon-Transaction-Risk-Investigator-Bengaluru-14Sept.gif&w=1920&q=75",
  },
  {
   
    img: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FExidelife_desktop.png&w=1920&q=75",
  },
  {
  
    img: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FAmazon-Transaction-Risk-Investigator-Hyderabad-14-sept.gif&w=1920&q=75",
  },
  {
    img:"https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop-Banner_2_pos_new.png&w=1920&q=75",
  },
  {
    img:"https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=1920&q=75",

  },
  {
     img: "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fmint_d_banner.png&w=1920&q=75",
  },
  {
     img:"https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fwinter_d_home.png&w=1920&q=75",
  }
];



const picture=[

    {
      img:"https://static.thenounproject.com/png/2404411-200.png",
      title:"Assesment",
    },
    {
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1tahb6m6Q8rxoG7LkAwYh9rlObqn2N7BzVHGZSwxbVP0-Q54dTykxZW1upTMqv_CW8k&usqp=CAU",
       title:"Carrer path",
    },
    {
      img:"https://content.thriveglobal.com/wp-content/uploads/2019/06/3B3FD3E1-3116-49C8-83EE-4B237D769E00.jpeg",
      title:"Dream Job"
    }
  ]



