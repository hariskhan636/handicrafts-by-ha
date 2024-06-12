import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { MockTestimonials } from "constants/data";
import Slider from "react-slick";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <Text className="text-5xl font-bold text-center mt-10 mb-10">
        Testimonials
      </Text>
      <Box className="max-w-4xl mx-auto ">
        <Slider {...settings}>
          {MockTestimonials.map((testimonial, index) => (
            <Box key={index} className="p-4 ">
              <Box className="bg-black text-white p-6 rounded-lg  min-h-[270px]">
                <Box className="flex justify-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full"
                  />
                </Box>
                <Text className="mt-4 text-center text-orange-500">
                  {testimonial.name}
                </Text>
                <p className="mt-2 text-center">{testimonial.feedback}</p>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default Testimonials;
