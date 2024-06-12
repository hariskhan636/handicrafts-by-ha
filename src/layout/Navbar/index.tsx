import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { navItems } from "constants/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Flex className="w-full p-8 bg-black items-center justify-center fixed z-[100]">
        <Flex className="w-[100%] items-center justify-between fixed p-4">
          <Text
            onClick={() => handleNavigation("/")}
            className="text-white cursor-pointer text-lg font-Inter"
          >
            HANDICRAFTS BY HUSSAIN ALA
          </Text>
          <Flex
            onClick={handleToggle}
            className="flex-col cursor-pointer gap-1 justify-center items-center h-[40px] w-[40px] bg-white rounded-full"
          >
            {isOpen ? (
              <div className="w-[60px] h-[60px] flex justify-center items-center">
                <div className="relative">
                  <FaTimes className="w-[30px] h-[30px]" />
                </div>
              </div>
            ) : (
              <>
                <div className="w-[30px] h-[3px] bg-black rounded-md"></div>
                <div className="w-[30px] h-[3px] bg-black"></div>
                <div className="w-[30px] h-[3px] bg-black"></div>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center z-[99]"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            onClick={handleToggle}
          >
            {navItems.map((item, index) => (
              <Text
                _hover={{ color: "orange.600" }}
                className="text-white text-2xl mb-4 cursor-pointer"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </Text>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
