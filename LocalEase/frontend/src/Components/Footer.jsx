import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";

// import ReactStoreBadges from 'react-store-badges'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// function useScrollDirection() {
//     const [scrollDirection, setScrollDirection] = useState(null);

//     useEffect(() => {
//       let lastScrollY = window.pageYOffset;

//       const updateScrollDirection = () => {
//         const scrollY = window.pageYOffset;
//         const direction = scrollY > lastScrollY ? "up" : "down";
//         if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
//           setScrollDirection(direction);
//         }
//         lastScrollY = scrollY > 0 ? scrollY : 0;
//       };
//       window.addEventListener("scroll", updateScrollDirection); // add event listener
//       return () => {
//         window.removeEventListener("scroll", updateScrollDirection); // clean up
//       }
//     }, [scrollDirection]);

//     return scrollDirection;
//   };

export default function Footer() {
  // const scrollDirection = useScrollDirection();

  return (
    <Box
      bg={useColorModeValue("black", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
      bottom="0"
      maxH="400px"
      mt={"10px"}
      w="100%"
      zIndex="99"
      transitionProperty="all"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      transitionDuration="500ms"
      // display={`${ scrollDirection === "down" ? "none" : "block"}`}
    >
      <Container as={Stack} maxW={"1000%"} bgColor="#333">
        <Container as={Stack} maxW={"80%"} bgColor="#333">
          <h1 style={{ fontWeight: "bolder", fontSize: "20px" }}>
            Amazing offers available on nearbuy
          </h1>
          <h3>
            nearbuy helps you discover the best things to do, eat and buy –
            wherever you are! Make every day awesome with nearbuy. Dine at the
            finest restaurants, relax at the best spas, pamper yourself with
            exciting wellness and shopping offers or just explore your city
            intimately… you will always find a lot more to do with nearbuy. From
            tattoo parlors to music concerts, movie tickets to theme parks,
            everything you want is now within reach. Don't stop yet! Take it
            wherever you go with the nearbuy mobile app. Based on your location
            and preference, our smart search engine will suggest new things to
            explore every time you open the app. What's more, with offers on
            everything around you... you are sure to try something new every
            time.
          </h3>
        </Container>
      </Container>

      <Container as={Stack} maxW={"6xl"} py={2}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={3}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"https://adminfrontend-kamalg-coder.vercel.app/login"}>
              Admin
            </Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Safety Center</Link>
            <Link href={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            {/* <ReactStoreBadges 
            platform={'ios'}
            locale={'en-us'}/>
            <ReactStoreBadges 
            platform={'android'}
            locale={'en-us'}/> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={2}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>
            Copyright © nearbuy.com India Private Limited. All rights reserved.
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
