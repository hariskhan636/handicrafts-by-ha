import { Flex, Button, Box, Image, Text } from "@chakra-ui/react";
import { Hero, Hero2 } from "assets";
import { useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

function HeroSection() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/catalog");
  };

  const items = [
    <Image className="w-full h-[800px]" src={Hero} alt="Hero Image 1" />,
    <Image className="w-full h-[800px]" src={Hero2} alt="Hero Image 2" />,
  ];

  const settings = {
    disableButtonsControls: true,
    disableDotsControls: true,
    infinite: true,
    autoPlay: true,
    autoPlayInterval: 5000,
    animationDuration: 1000,
    mouseTrackingEnabled: true,
    responsive: {
      0: { items: 1 },
      1024: { items: 1 },
    },
  };

  return (
    <Box className="w-full mt-[62px] relative overflow-hidden">
      <AliceCarousel {...settings}>
        {items.map((item, index) => (
          <Box key={index} className="relative">
            {item}
            <Flex className="flex-col gap-4 absolute justify-center top-[200px] left-[30%]">
              <Text
                className="text-white font-bold text-6xl"
                style={{ WebkitTextStroke: "2px black" }}
              >
                Purely Handmade Handicrafts
              </Text>
              <Text
                className="text-white text-center text-2xl font-semibold"
                style={{ textShadow: "2px" }}
              >
                Our products are purely handmade, providing you with the finest
                quality
              </Text>
              <Button
                onClick={handleNavigation}
                color="white"
                bgColor="black"
                className="w-[20%]"
                _hover={{
                  bg: "white",
                  color: "black",
                  borderColor: "orange.500",
                }}
              >
                View Catalog
              </Button>
            </Flex>
          </Box>
        ))}
      </AliceCarousel>
    </Box>
  );
}

export default HeroSection;
