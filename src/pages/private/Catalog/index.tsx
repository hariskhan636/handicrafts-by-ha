import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { catalogItems } from "constants/data";

function Catalog() {
  return (
    <>
      <Text className="text-5xl font-bold text-center mt-20 mb-10">
        Catalog
      </Text>
      <Flex className="flex-wrap justify-center gap-4 mb-10">
        {catalogItems.map((item) => (
          <Box className="w-[49%] relative">
            <Image src={item.image} alt={item.name} />
            <Text className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-4xl font-bold">
              {item.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </>
  );
}

export default Catalog;
