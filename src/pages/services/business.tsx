import { HStack, VStack,  Box, Text, Image, Heading  } from '@chakra-ui/react'
import React from 'react'

const Business = () => {
  return (
    <>
      <Box
        gap={{ md: "3rem", base: "1rem" }}
        fontFamily={"Figtree, sans-serif"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
        minH={"100vh"}
      >
        <Heading
          fontWeight={"700"}
          lineHeight={"1.2"}
          fontSize={{ md: "1.25rem", base: "0.65rem" }}
          as={"h1"}
          color={"rgba(61,61,145,1)"}
          mt={{md:'4rem',base:'2rem'}}
        >
          For Businesses
        </Heading>
        <Text
          fontSize={{ md: "2.83rem", base: "1.41rem" }}
          lineHeight={"1.2"}
          fontWeight={"700"}
          as={"h2"}
          color={"#1c1c1c"}
        >
         Enable Customers. Enrich Data. <br></br> Enhance Business.
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"700"}
          lineHeight={"1.2"}
          fontSize={{ md: "1.5rem", base: "0.8rem" }}
        >
          Revolutionize customer insights, Personalize commerce, <br></br>
          Build deeper connections with your customers’ consent and control.
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={{ md: "1rem", base: "0.5rem" }}
          lineHeight={"1.2"}
        >
          Hushh's AI-first platform bridges the gap by empowering customers to control their data while brands unlock new possibilities for engagement, trust, and growth.
        </Text>
        <HStack spacing={4} justifyContent="center" w="100%" minW={"100%"}>
          <Box
            bg="black"
            color="white"
            borderRadius="3xl"
            overflow="hidden"
            // maxW="sm"
            textAlign="center"
          >
            <Image
              src={TypingGif}
              alt="Hushh Companion Hushh Browser Companion"
              width={"340px"}
              height={"220px"}
            />
            <Box
              fontFamily={"Figtree, sans-serif"}
              p={4}
              bg={"rgba(28,28,28,1)"}
              color={"white"}
            >
              <Text
                fontWeight="400"
                fontSize={{ md: "0.75rem", base: "0.45rem" }}
              >
                Hushh Ecosystem
              </Text>
              <Text
                fontWeight={"600"}
                fontSize={{ md: "1.25rem", base: "0.75rem" }}
              >
                Hushh offers a suite of products designed to revolutionize how businesses interact with their customers in the age of personalized experiences
              </Text>
            </Box>
          </Box>

          <Box
            bg="black"
            color="white"
            borderRadius="3xl"
            overflow="hidden"
            // maxW="sm"
            textAlign="center"
          >
            <Image
              src={''}
              alt="Hushh Wallet"
              width={"460px"}
              height={"370px"}
            />
            <Box p={4} bg={"rgba(28,28,28,1)"} color={"white"}>
              <Text
                fontWeight="400"
                fontSize={{ md: "0.75rem", base: "0.45rem" }}
              >
                Hushh Wallet
              </Text>
              <Text
                fontWeight={"600"}
                fontSize={{ md: "1.25rem", base: "0.75rem" }}
              >
                Your Personal Data, <br></br> Your Powerhouse
              </Text>
            </Box>
          </Box>

          <Box
            bg="black"
            color="white"
            borderRadius="3xl"
            overflow="hidden"
            // maxW="sm"
            textAlign="center"
          >
            <Image
              src={DressImage}
              alt="Vibe Search"
              width={"340px"}
              height={"220px"}
            />
            <Box p={4} bg={"rgba(28,28,28,1)"} color={"white"}>
              <Text
                fontWeight="400"
                fontSize={{ md: "0.75rem", base: "0.45rem" }}
              >
                Vibe Search
              </Text>
              <Text
                fontWeight={"600"}
                fontSize={{ md: "1.25rem", base: "0.75rem" }}
              >
                Stop Scrolling, <br></br> Start Discovering!
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  )
}

export default Business