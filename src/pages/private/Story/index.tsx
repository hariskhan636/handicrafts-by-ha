import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { CustomModal } from "components";
import { blogData } from "constants/data";
import { useState } from "react";
import { Blog1 } from "assets";

type Blog = {
  title: string;
  image: string;
  description: string;
  article: string;
};

function Story() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [blog, setBlog] = useState({
    title: "",
    image: "",
    description: "",
    article: "",
  });

  const handleOpenModal = (blog: Blog) => {
    setBlog(blog);
    onOpen();
  };

  return (
    <>
      <CustomModal
        title={blog.title}
        size="6xl"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          className="justify-center gap-8 p-8 object-cover"
        >
          <Box className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              className="w-full h-auto max-w-sm rounded-lg shadow-lg"
              src={blog.image}
              alt={blog.title}
            />
          </Box>
          <Box className="w-full md:w-1/2 flex flex-col justify-center">
            <Text className="text-lg leading-relaxed text-gray-700">
              {blog.article}
            </Text>
          </Box>
        </Flex>
      </CustomModal>
      ;
      <Text className="text-5xl font-bold text-center mt-10 mb-10">
        Read Our Story
      </Text>
      <Flex className="justify-center items-center gap-4">
        {blogData.map((blog) => (
          <>
            <Box className="relative w-[30%]">
              <Image src={blog.image} width="100%" />
              <Box className="bg-gray-200 pt-[30px] p-4">
                <Text className="text-xl font-bold mb-2">{blog.title}</Text>
                <Text className="text-lg mb-2">{blog.description}</Text>
                <Button
                  onClick={() => handleOpenModal(blog)}
                  variant="outline"
                  color="black"
                  borderColor="black"
                >
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
                {blog.day} <br />
                July
              </Box>
            </Box>
          </>
        ))}
      </Flex>
    </>
  );
}

export default Story;
