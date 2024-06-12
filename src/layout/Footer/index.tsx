import {
  Flex,
  Box,
  VStack,
  Input,
  IconButton,
  HStack,
  Icon,
  Text,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <Flex bg="black" color="white" py={10} px="20%" flexWrap="wrap">
      <Flex className="w-[100%] gap-3 mb-10">
        <InputGroup className="mr-5">
          <Input
            rounded="none"
            placeholder="Enter your email"
            bg="white"
            color="black"
            border="none"
            _placeholder={{ color: "gray.500" }}
          />
          <InputRightElement>
            <IconButton
              rounded="none"
              aria-label="Subscribe"
              icon={<FaArrowRight />}
              ml={2}
              bg="orange.500"
              color="white"
              _hover={{ bg: "orange.600" }}
            />
          </InputRightElement>
        </InputGroup>

        <IconButton
          as="a"
          href="#"
          aria-label="Facebook"
          icon={<FaFacebook />}
          bg="white"
          color="black"
          _hover={{ bg: "gray.200" }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter />}
          bg="white"
          color="black"
          _hover={{ bg: "gray.200" }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          bg="white"
          color="black"
          _hover={{ bg: "gray.200" }}
        />
      </Flex>

      <Flex className="w-[100%] justify-between">
        <VStack align="start" spacing={4} mr={{ md: 10 }}>
          <Text fontWeight="bold">Menu</Text>
          <Link href="#" _hover={{ color: "orange.600" }}>
            Home
          </Link>
          <Link href="#" _hover={{ color: "orange.600" }}>
            Contact Us
          </Link>
          <Link href="#" _hover={{ color: "orange.600" }}>
            Catalog
          </Link>
          <Link href="#" _hover={{ color: "orange.600" }}>
            Our Story
          </Link>
        </VStack>

        <VStack align="start" spacing={4} mr={{ md: 10 }}>
          <Text fontWeight="bold">Instagram</Text>
          <HStack spacing={2}>
            <Box bg="white" p={2} rounded="md">
              <img src="path/to/image1.jpg" className="w-10 h-10" />
            </Box>
            <Text>In Demand</Text>
          </HStack>
          <HStack spacing={2}>
            <Box bg="white" p={2} rounded="md">
              {/* Replace with the correct image path */}
              <img src="path/to/image2.jpg" className="w-10 h-10" />
            </Box>
            <Text>Top Seller</Text>
          </HStack>
        </VStack>

        <VStack align="start" spacing={4}>
          <Text fontWeight="bold">Contact Us</Text>
          <HStack spacing={2}>
            <Icon as={FaMapMarkerAlt} />
            <Text>Location</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaPhoneAlt} />
            <Text>Call +01 1234567890</Text>
          </HStack>
          <HStack spacing={2}>
            <Icon as={FaEnvelope} />
            <Text>demo@gmail.com</Text>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Footer;
