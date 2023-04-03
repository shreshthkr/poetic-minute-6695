import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Button,
  Icon,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiRightArrowAlt } from "react-icons/bi";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { SimpleGrid } from "@chakra-ui/react";

// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useNavigate } from "react-router";
import {
  Text,
  Card,
  CardBody,
  Link,
  Image,
  Stack,
  Flex,
} from "@chakra-ui/react";

// Settings for the slider
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 2,
  initialSlide: 0,
};

export default function ImageSlider({ data }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(1);
  // const navigate=useNavigate();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const navigate = useNavigate();
  const handleClick = ({ id }) => {
    navigate(`/products/${id}`);
  };

  return (
    <Box
      mt="10px"
      maxH={"200px"}
      position={"relative"}
      margin="auto"
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <Button backgroundColor={"blue.200"}>
          <AiFillCaretLeft color="black" />
        </Button>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <Button backgroundColor={"blue.200"}>
          <AiFillCaretRight color="black" />
        </Button>
      </IconButton>
      {/* Slider */}

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {data?.map((el) => (
          <Card
            key={el.id}
            textAlign="center"
            padding={5}
            cursor={"pointer"}
            border="2px solid grey"
            mt="5px"
            maxH="250px"
            onClick={() => handleClick(el)}
            maxW={"130px"}
          >
            <Image src={el.img} maxW="100px" maxH={"150px"} m="30px auto" />
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
