import { Box, Button, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import TypingGif from "../../../public/gif/typing.gif";
import CardImage from "../../../public/images/fendiCards.png";
import DressImage from "../../../public/images/dressImage.png";
import Mobile from "../../../public/images/mobile.png";
import QRImage from "../../../public/images/QRWallet.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";

const Consumers = () => {
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
        >
          For Consumers
        </Heading>
        <Text
          fontSize={{ md: "2.83rem", base: "1.41rem" }}
          lineHeight={"1.2"}
          fontWeight={"700"}
          as={"h2"}
          color={"#1c1c1c"}
        >
          Own Your Data, <br></br> Unlock Its Value{" "}
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"700"}
          lineHeight={"1.2"}
          fontSize={{ md: "1.5rem", base: "0.8rem" }}
        >
          Your Data, Your Rules. Get Rewarded for What You Share.
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={{ md: "1rem", base: "0.5rem" }}
          lineHeight={"1.2"}
        >
          Take control of your digital footprint and unlock personalized
          experiences and exclusive rewards with Hushh's suite of products.
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
                Hushh Companion
              </Text>
              <Text
                fontWeight={"600"}
                fontSize={{ md: "1.25rem", base: "0.75rem" }}
              >
                Track Your Digital <br></br> Footprint
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
              src={CardImage}
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

      <HStack
        bg={"#D9D2E9"}
        mt={{ md: "3rem", base: "1rem" }}
        gap={{ md: "6rem", base: "1rem" }}
        padding={{ md: "2rem", base: "0.5" }}
        spacing={4}
        alignItems={"center"}
        w={"100%"}
      >
        <Box
          as="div"
          className="embed-container"
          w="100%"
          maxW="400px"
          overflow="hidden"
          position="relative"
          paddingBottom="56.25%"
        >
          <iframe
            src="https://www.youtube.com/embed/igf1PYq1WOM"
            title="Hushh User Journey"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "75%",
            }}
          ></iframe>
        </Box>

        <Box
          maxW={{ md: "35rem", base: "100%" }}
          p={4}
          textAlign={"left"}
          display={"flex"}
          flexDirection={"column"}
          gap={{ md: "2rem", base: "1rem" }}
        >
          <Text
            fontSize={{ md: "2rem", base: "1.2rem" }}
            fontWeight="700"
            lineHeight="1.2"
            color="#434343"
          >
            Imagine This
          </Text>
          <Text
            mr={{ md: "6rem", base: "0" }}
            color={"#666666"}
            fontWeight={"400"}
            lineHeight={"1.2"}
            fontSize={{ md: "1rem", base: "0.65rem" }}
          >
            You walk into your favorite store, and the sales agent understands
            your style, size, and even your vibe. They offer you personalized
            recommendations and exclusive discounts, all because you've chosen
            to share relevant information with them.
          </Text>
          <Text
            color={"#666666"}
            fontWeight={"700"}
            lineHeight={"1.2"}
            fontSize={{ md: "1rem", base: "0.65rem" }}
          >
            This is the power of Hushh Wallet.
          </Text>
        </Box>
      </HStack>

      <VStack bg={"#F5F5F7"} p={{ md: "4rem", base: "1rem" }}>
        <Text
          fontSize={{ md: "2.3rem", base: "1.15rem" }}
          color={"#1c1c1c"}
          fontWeight={"700"}
          lineHeight={"1.2"}
        >
          Hushh Wallet
        </Text>
        <Text
          fontSize={{ md: "1.16rem", base: "0.65rem" }}
          color={"#434343"}
          fontWeight={"600"}
          lineHeight={"1.2"}
        >
          Take control of your digital identity and unlock a world of
          personalized experiences and rewards.
        </Text>
        <Image src={Mobile} alt="Hushh Wallet App" />
        <Text
          color={"#434343"}
          fontWeight={"400"}
          fontSize={{ md: "1.5rem", base: "0.75rem" }}
          lineHeight={"1.2"}
        >
          We live in a{" "}
          <span style={{ fontWeight: "700" }}>data-driven world.</span>
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"400"}
          fontSize={{ md: "1.5rem", base: "0.75rem" }}
          lineHeight={"1.2"}
        >
          Every online interaction, every purchase, every click leaves a digital
          footprint.
        </Text>
        <Text
          color={"#434343"}
          fontWeight={"400"}
          fontSize={{ md: "1.5rem", base: "0.75rem" }}
          lineHeight={"1.2"}
        >
          Hushh Wallet empowers you to{" "}
          <span style={{ fontWeight: "700" }}>take control</span> of that data
          and{" "}
          <span style={{ fontWeight: "700" }}>use it to your advantage.</span>
        </Text>
      </VStack>

      <Accordion
        allowToggle
        minW={"100%"}
        w="100%"
        flexDirection="row"
        p={{ md: "4rem", base: "1rem" }}
        display="flex"
        justifyContent="center"
      >
        <AccordionItem>
          <Box
            bg="purple.200"
            p={4}
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            m={2}
            borderRadius="md"
            textAlign="center"
          >
            <AccordionButton
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              h="100%"
            >
              <Box
                as="span"
                flex="1"
                fontWeight="bold"
                fontSize={{ md: "1.5rem", base: "1rem" }}
                alignSelf="flex-start"
              >
                Unify your Scattered Data
              </Box>
              <ChevronDownIcon
                style={{
                  background: "#5f6368",
                  color: "white",
                  borderRadius: "50%",
                }}
                stroke="white"
                alignSelf="flex-end"
              />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
            Collect your data from phones, apps, brands, and data giants
            creating a comprehensive digital profile.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Box
            bg="pink.200"
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            p={4}
            m={2}
            borderRadius="md"
            textAlign="center"
          >
            <AccordionButton
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              h="100%"
            >
              <Box
                as="span"
                flex="1"
                fontWeight="bold"
                fontSize={{ md: "1.5rem", base: "1rem" }}
                alignSelf="flex-start"
              >
                Curate your Identity
              </Box>
              <ChevronDownIcon
                style={{
                  background: "#5f6368",
                  color: "white",
                  borderRadius: "50%",
                }}
                stroke="white"
                alignSelf="flex-end"
              />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
            Manage and refine your digital identity to reflect your true self.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Box
            bg="pink.300"
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            p={4}
            m={2}
            borderRadius="md"
            textAlign="center"
          >
            <AccordionButton
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              h="100%"
            >
              <Box
                as="span"
                flex="1"
                fontWeight="bold"
                fontSize={{ md: "1.5rem", base: "1rem" }}
                alignSelf="flex-start"
              >
                Unlock Personalized Experiences
              </Box>
              <ChevronDownIcon
                style={{
                  background: "#5f6368",
                  color: "white",
                  borderRadius: "50%",
                }}
                stroke="white"
                alignSelf="flex-end"
              />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
            Share your data to receive tailored experiences and offers.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Box
            bg="blue.200"
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            p={4}
            m={2}
            borderRadius="md"
            textAlign="center"
          >
            <AccordionButton
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              h="100%"
            >
              <Box
                as="span"
                flex="1"
                fontWeight="bold"
                fontSize={{ md: "1.5rem", base: "1rem" }}
                alignSelf="flex-start"
              >
                Get Rewarded
              </Box>
              <ChevronDownIcon
                style={{
                  background: "#5f6368",
                  color: "white",
                  borderRadius: "50%",
                }}
                stroke="white"
                alignSelf="flex-end"
              />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
            Earn rewards for sharing your data with trusted partners.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Box
            bg="blue.300"
            w={{ md: "250px", base: "150px" }}
            h={{ md: "200px", base: "100px" }}
            p={4}
            m={2}
            borderRadius="md"
            textAlign="center"
          >
            <AccordionButton
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
              h="100%"
            >
              <Box
                as="span"
                flex="1"
                fontWeight="bold"
                fontSize={{ md: "1.5rem", base: "1rem" }}
                alignSelf="flex-start"
              >
                Transparency and Control
              </Box>
              <ChevronDownIcon
                style={{
                  background: "#5f6368",
                  color: "white",
                  borderRadius: "50%",
                }}
                stroke="white"
                alignSelf="flex-end"
              />
            </AccordionButton>
          </Box>
          <AccordionPanel pb={4} fontSize={{ md: "1rem", base: "0.8rem" }}>
            Maintain full control over who accesses your data and how it is
            used.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <HStack
        my={{ md: "2rem", base: "1rem" }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ md: "4rem", base: "1rem" }}
      >
        <Text
          fontWeight={"700"}
          lineHeight={"1.2"}
          color={"rgba(28,28,28,1)"}
          fontSize={{ md: "2rem", base: "1rem" }}
        >
          {" "}
          Glimpse into Hushh Wallet{" "}
        </Text>
        <iframe
          style={{ borderRadius: "15px" }}
          width="828"
          height="550"
          src="https://www.youtube.com/embed/WYppPoOSi7k?si=yMlu5PUzuZhueJZm"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </HStack>

      <VStack
        my={{ md: "8rem", base: "1rem" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <HStack
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ md: "4rem", base: "1rem" }}
          bg={"rgba(0,0,0,0)"}
          mx={{ md: "6rem", base: "1rem" }}
        >
          <Text
            fontWeight={"700"}
            lineHeight={"1.2"}
            color={"#434343"}
            fontSize={{ md: "1.5rem", base: "0.65rem" }}
          >
            Hushh Wallet is more than just an app; it's a movement.
            <br></br>
            Download and unlock the true power of your personal data.
          </Text>
          <Image
            src={QRImage}
            alt="Hushh Wallet QR Code"
            boxSize={{ md: "16rem", base: "100px" }}
          />
        </HStack>
        <Button
          maxW={{ md: "680px", base: "8rem" }}
          px={"12px"}
          bg={"rgba(153, 40, 112, 1)"}
          color={"white"}
          _hover={{
          color:'white',
          background:'black'
          }}
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeIQF0GhLxmwEHrmOpMRQVlxuJBtQYUP2oT_GQt16h8oyw2Dg/viewform', '_blank')}
        >
          Want to have Wallet capabilities in your brand?
        </Button>
      </VStack>
      <Divider borderWidth={'2px'} my={'1rem'} stroke={'grey'}/>
    </>
  );
};

export default Consumers;
