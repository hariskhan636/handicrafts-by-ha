import { Flex, Button, Box, Image, Text } from "@chakra-ui/react";
import { Hero } from "assets";

function HeroSection() {
  return (
    <Box className="w-full mt-[62px] relative">
      <Box className="relative w-full h-[800px]">
        <Image
          className="w-full h-full object-cover"
          src={Hero}
          alt="Hero Image"
        />
      </Box>
      <Flex className="flex-col gap-4 absolute top-[300px] left-[10%]">
        <Text className="text-white font-bold text-5xl">Purely Handmade</Text>
        <Text className="text-white font-bold text-5xl">Handicrafts</Text>
        <Text className="text-white text-2xl max-w-[75%]">
          Our products are purely handmade, providing you with the finest
          quality
        </Text>
        <Button
          variant="outline"
          color="white"
          borderColor="white"
          className="w-[20%]"
          _hover={{
            bg: "orange.500",
            color: "white",
            borderColor: "orange.500",
          }}
        >
          View Catalog
        </Button>
      </Flex>
    </Box>
  );
}

export default HeroSection;
