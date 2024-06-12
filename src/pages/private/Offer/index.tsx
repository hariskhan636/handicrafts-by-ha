import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { RunnerM, ClutchM, ClutchS } from "assets";
import { useNavigate } from "react-router-dom";

function Offer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Flex className="p-4 justify-center items-center gap-4">
      <Box className="relative w-[60%]">
        <Image src={RunnerM} objectFit="fill" h="970px" alt="Runner" />
        <Flex className="flex-col gap-4 absolute p-2 top-0">
          <Text className="text-white font-bold text-5xl">
            Exquisite Handmade Runner Sets
          </Text>
          <Button
            onClick={() => {
              handleNavigation("/runners");
            }}
            variant="outline"
            color="white"
            borderColor="white"
            className="w-[200px]"
            _hover={{
              bg: "orange.500",
              color: "white",
              borderColor: "orange.500",
            }}
          >
            View Now
          </Button>
        </Flex>
      </Box>
      <Flex className="flex-col gap-3 w-[39%]">
        <Box className="relative w-[100%]">
          <Image src={ClutchM} w="full" alt="Clutch" />
          <Flex className="flex-col gap-4 absolute p-2 bottom-0 right-0">
            <Text className="text-white font-bold text-4xl">Clutch Bags</Text>
            <Button
              onClick={() => {
                handleNavigation("/clutch-bags");
              }}
              alignSelf="flex-end"
              variant="outline"
              color="white"
              borderColor="white"
              className="w-[100px]"
              _hover={{
                bg: "orange.500",
                color: "white",
                borderColor: "orange.500",
              }}
            >
              View Now
            </Button>
          </Flex>
        </Box>
        <Box className="relative  w-[100%]">
          <Image src={ClutchS} w="full" alt="Clutch" />
          <Flex className="flex-col gap-4 absolute p-2 bottom-0 left-0">
            <Text className="text-white font-bold text-4xl">
              Handicrafted with perfection
            </Text>
            <Button
              onClick={() => {
                handleNavigation("/clutch-bags");
              }}
              variant="outline"
              color="white"
              borderColor="white"
              className="w-[200px]"
              _hover={{
                bg: "orange.500",
                color: "white",
                borderColor: "orange.500",
              }}
            >
              View Now
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Offer;
