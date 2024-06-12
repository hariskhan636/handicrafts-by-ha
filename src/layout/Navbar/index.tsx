import { Flex, Text, Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex className="w-full p-8 bg-black items-center justify-center fixed z-[100] ">
      <Flex className="w-[100%] items-center justify-between fixed p-4">
        <Text className="text-white text-lg font-Inter text-">
          HANDICRAFTS BY HUSSAIN ALA
        </Text>
        <Flex className="flex-col cursor-pointer gap-1 justify-center items-center h-[40px] w-[40px] bg-white rounded-full">
          <div className=" w-[30px] h-[3px] bg-black rounded-md"></div>
          <div className=" w-[30px] h-[3px] bg-black"></div>
          <div className=" w-[30px] h-[3px] bg-black"></div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
