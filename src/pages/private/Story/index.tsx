import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { Ceo, Worker } from "assets";

function Story() {
  return (
    <>
      <Text className="text-5xl font-bold text-center mt-10 mb-10">
        Read Our Story
      </Text>
      <Flex className="justify-center items-center gap-4">
        <Box className="relative w-[30%]">
          <Image src={Ceo} width="100%" alt="Ceo" />
          <Box className="bg-gray-200 pt-[30px] p-4">
            <Text className="text-xl font-bold mb-2">
              Meet our CEO: Hussain Ala
            </Text>
            <Text className="text-lg mb-2">
              Get inside the mind of our CEO and explore how he visualises our
              craft
            </Text>
            <Button variant="outline" color="black" borderColor="black">
              Read More
            </Button>
          </Box>
          <Box
            position="absolute"
            bottom="15%"
            left="2%"
            border="2px solid white"
            bg="black"
            color="white"
            textAlign="center"
            fontWeight="bold"
            px={4}
            py={2}
          >
            14 <br />
            July
          </Box>
        </Box>
        <Box className="relative w-[30%] ">
          <Image src={Worker} width="100%" alt="worker" />
          <Box className="bg-gray-200 pt-[30px] p-4">
            <Text className="text-xl font-bold mb-2">
              Empowering women through thier craft
            </Text>
            <Text className="text-lg mb-2">
              Take a look at our women workforce and we are strengthening them
            </Text>
            <Button variant="outline" color="black" borderColor="black">
              Read More
            </Button>
          </Box>
          <Box
            position="absolute"
            bottom="15%"
            left="2%"
            border="2px solid white"
            bg="black"
            color="white"
            textAlign="center"
            fontWeight="bold"
            px={4}
            py={2}
          >
            15 <br />
            July
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default Story;
