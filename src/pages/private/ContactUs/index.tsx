import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { Ring } from "assets";

function ContactUs() {
  return (
    <Flex className="justify-center items-center mt-[20px] p-10 gap-4">
      <Image className="w-[600px]" src={Ring} />
      <Flex className="flex-col  gap-2 w-[30%]">
        <Text className="text-3xl font-bold ">Reach Out To Us!</Text>
        <Text className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum,
          eius odit consectetur vel quasi in quidem, eveniet ab est corporis
          tempore.
        </Text>
        <Button
          bgColor="orange.500"
          color="white"
          className="w-[30%]"
          _hover={{
            bg: "orange.800",
            color: "white",
            borderColor: "orange.500",
          }}
        >
          Contact us
        </Button>
      </Flex>
    </Flex>
  );
}

export default ContactUs;
