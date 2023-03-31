import { Container } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Card, CardBody, Stack, Heading, Image, Divider, Button } from '@chakra-ui/react'
import Bigcarousel from '../Components/Carousel';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Text, SimpleGrid } from '@chakra-ui/react';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from '../Components/ImageSlider';


const Home = () => {

    const [newdata, setData] = useState()


    useEffect(() => {
        axios
            .get("https://nearbuy-mock-server.onrender.com/products")
            .then(data => setData(data.data)
            )
            .catch(error => {
                console.log(error)
            });

    }, [])
    console.log("a", newdata)




    const navigate = useNavigate();

    const handleDeals = (e) => {
        let val = e.target.innerText;
        if (val === "Restaurant Deals" || val === "Buffet Deals" || val === "View All Offers") {
            localStorage.setItem("typeFilter", "Restaurant Deals");
            localStorage.setItem("actualType", val);
        }
        else if (val === "Salon Deals" || val === "Spa Deals") {
            localStorage.setItem("typeFilter", "Salon Deals");
            localStorage.setItem("actualType", val);
        }
        else {
            localStorage.setItem("typeFilter", val);
            localStorage.setItem("actualType", val);
        }

        navigate("/products")

    }

    const handleClick = ({ id }) => {
        navigate(`/products/${id}`)
    }

    const headerImages = [{
        id: "1",
        url: "https://img4.nbstatic.in/tr:w-/60af2a061e2731000ba1096a.png",
        text: "Restaurant Deals"
    },
    {
        id: "2",
        url: "https://img4.nbstatic.in/tr:w-/639acd9b8db992000bac8a46.png",
        text: "Buffet Deals"
    },
    {
        id: "3",
        url: "https://img4.nbstatic.in/tr:w-/60ac96c840e9df000b6cbf94.png",
        text: "Salon Deals"
    },
    {
        id: "4",
        url: "https://img4.nbstatic.in/tr:w-/60ac96e240e9df000b6cbf95.png",
        text: "Spa Deals"
    },
    {
        id: "5",
        url: "https://img4.nbstatic.in/tr:w-/6201ec623b031b000b53e5b6.png",
        text: "Activities Deals"
    },
    {
        id: "6",
        url: "https://img4.nbstatic.in/tr:w-/62d67522edffcc000b060b5c.png",
        text: "Gift Cards"
    },
    {
        id: "7",
        url: "https://img4.nbstatic.in/tr:w-/62d6747fb3c621000b6fb633.png",
        text: "Helath"
    }]

    const cards = [
        'https://img4.nbstatic.in/tr:w-2800/63c90b038db992000bee9614.jpg',
        'https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg'
    ];

    const cards1 = [
        'https://img4.nbstatic.in/tr:w-2800/627b4e0db3c621000b5f5e77.jpg',
        'https://img4.nbstatic.in/tr:w-2800/627b4e163b031b000b774d60.jpg'
    ];

    const images = [
        "https://img4.nbstatic.in/tr:w-350/61fbad7a3b031b000bd5c0df.jpeg",
        "https://img4.nbstatic.in/tr:w-350/61fbad0d6f487a000bf5658c.jpeg",
        "https://img4.nbstatic.in/tr:w-350/61fbad613b031b000bd5c0de.jpeg"
    ]

    const promo = [
        "https://img4.nbstatic.in/tr:w-700/6299bae13b031b000ba75db4.jpeg",
        "https://img4.nbstatic.in/tr:w-700/6294bbe1b3c621000b366b85.jpeg",
        "https://img4.nbstatic.in/tr:w-700/636039fc22156b000cb5df05.jpeg"
    ]


    return (
        <Container maxW="100%" mt="102px" >

            {/* Header */}

            <Container
                maxH="120px"
                maxWidth="100%"
                margin="auto"
                shadow="base">
                <Container
                    height={"110px"}
                    maxWidth="80%"
                    margin="auto">
                    <SimpleGrid columns={[5, 6, 7, 8]} spacing={1}>
                        {headerImages.map((el) =>
                            <Card key={el.id}
                                textAlign="center"
                                padding={5}
                                boxShadow="none"
                                h={"110px"}
                                maxW={"150px"}
                                borderRadius="none"
                                onClick={handleDeals}
                                _hover={{ bg: "#DCDCDC" }}>
                                <Image src={el.url} maxW="40px" maxH={"50px"} m="auto" />
                                <Text mt={2} fontSize="14px" >{el.text}</Text>
                            </Card>)}
                    </SimpleGrid>
                </Container>
            </Container>


            {/* First Carousel */}
            <Container maxW="100%" marginTop="30px" maxH="200px" >
                <Bigcarousel cards={cards} />
            </Container>



            {/* imageSlider */}
            <Container maxW="90%" marginTop="50px" maxH="400px" >
                <ImageSlider data={newdata} />
            </Container>





            {/* Buffet heading */}

            <Container maxW="90%" margin={"auto"} marginTop="50px">
                <Text fontWeight="900" textAlign="left" fontSize="2xl">Everything Buffet</Text>
            </Container>

            <Container maxW="90%" margin="auto" marginTop="20px" display="flex" gap="20px" >
                <Image src='https://img4.nbstatic.in/tr:w-350/63285c2fc10843000be89e59.jpg' alt="buffe" maxW="300px" maxH="170px" />
                <Image src='https://img4.nbstatic.in/tr:w-350/63285c40c10843000be89e5a.jpg' alt="buffe" maxW="300px" maxH="170px" />
            </Container>


            {/* second carousel */}

            <Container maxW="100%" marginTop="50px" >
                <Bigcarousel cards={cards1} />
            </Container>


            {/* New On NearBuy */}

            <Container maxW="90%" margin={"auto"} marginTop="50px">
                <Text fontWeight="900" textAlign="left" fontSize="2xl">New On NearBuy</Text>
            </Container>


            <Container maxW="90%" margin="auto" marginTop="20px" >
                <SimpleGrid columns={[1, 2, 3]} spacing={5}>
                    {newdata?.filter((el) => el.name == "Swiggy Money").map((el) =>
                        <Card key={el.id}
                            p="30px"
                            cursor={"pointer"}
                            maxH={"500px"}
                            maxW={"300px"}
                            onClick={(() => handleClick(el))}
                            _hover={{ boxShadow: '5px 5px 20px grey' }}>
                            <Image src={el.img} maxW="250px" maxH={"450px"} borderRadius="5px" />
                            <Text fontSize={"17px"} textAlign="left" fontWeight={"bold"} margin={"15px"}>{el.name}</Text>
                            <Text fontSize={"15px"} textAlign="left" margin={"10px"} overflow="hidden" maxH={"20px"} maxW={"150px"}>{el.desc}</Text>
                            <Divider mt="10px" />
                            <Text fontSize={"12px"} textAlign="left" margin={"5px"}>{el.desc}</Text>
                        </Card>
                    )}
                </SimpleGrid>
            </Container>



            {/*Quick Bites*/}

            <Container maxW="90%" margin={"auto"} marginTop="50px">
                <Text fontWeight="900" textAlign="left" fontSize="2xl">Quick Bites</Text>
            </Container>

            <Container maxW="90%" marginTop="10px" maxH="200px" >
                <ImageSlider data={newdata?.filter((el) => el.typeFilter === "Restaurant Deals")} />
            </Container>





            {/* next on your mind heading */}

            <Container maxW="90%" margin={"auto"} marginTop="50px">
                <Text fontWeight="900" textAlign="left" fontSize="2xl">Next Thing On Your Mind</Text>
            </Container>

            <Container maxW="90%" margin="auto" marginTop="10px" >
                <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={5}>
                    {images.map((img, index) =>
                        <Card key={index}
                            _hover={{ boxShadow: '5px 5px 20px grey' }}>
                            <Image src={img} maxW="250px" maxH={"300px"} borderRadius="20px" />
                        </Card>
                    )}
                </SimpleGrid>
            </Container>





            {/* Salon heading */}

            <Container maxW="90%" margin={"auto"} marginTop="50px">
                <Text fontWeight="900" textAlign="left" fontSize="2xl">Popular Salon Services</Text>
            </Container>

            <Container maxW="90%" margin="auto" marginTop="10px" >
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
                    {newdata?.filter((el) => el.typeFilter == "Salon Deals").map((el) =>
                        <Card key={el.id}
                            maxH={"400px"}
                            maxW={"300px"}
                            cursor={"pointer"}
                            p={5}
                            onClick={(() => handleClick(el))}
                            _hover={{ boxShadow: '5px 5px 20px grey' }}>
                            <Image src={el.photos[1]} maxW="200px" maxH={"300px"} borderRadius="5px" />
                            <Text fontSize={"12px"} textAlign="left" margin={"20px"}>{el.desc}</Text>
                        </Card>
                    )}
                </SimpleGrid>
            </Container>


            {/* Relaxing heading */}

            <Container maxW="90%" margin={"auto"} marginTop="50px">
                <Text fontWeight="900" textAlign="left" fontSize="2xl">Relaxing Massages</Text>
            </Container>

            <Container maxW="90%" margin="auto" marginTop="10px" >
                <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={5}>
                    {newdata?.filter((el) => el.typeFilter == "Health").map((el) =>
                        <Card key={el.id}
                            maxH={"400px"}
                            cursor={"pointer"}
                            maxW={"300px"}
                            p={5}
                            onClick={(() => handleClick(el))}
                            _hover={{ boxShadow: '5px 5px 20px grey' }}>
                            <Image src={el.photos[1]} maxW="200px" maxH={"300px"} borderRadius="5px" />
                            <Text fontSize={"15px"} textAlign="left" margin={"20px"}>{el.desc}</Text>
                        </Card>
                    )}
                </SimpleGrid>
            </Container>




            {/* next on your mind heading */}

            <Container maxW="90%" margin={"auto"} marginTop="20px">
                <Text fontWeight="900" textAlign="left" fontSize="2xl">Promo Codes For More Savings</Text>
            </Container>

            <Container maxW="90%" margin="auto" marginTop="10px" >
                <SimpleGrid columns={[1, 2, 3]} spacing={5}>
                    {promo.map((img, index) =>
                        <Card key={index}
                        >
                            <Image src={img} maxW="350px" maxH={"200px"} borderRadius="20px" />
                            <Divider />
                            <Text fontSize={"12px"} textAlign="left" margin={"5px"}>Valid till 2feb 2023</Text>
                        </Card>
                    )}
                </SimpleGrid>
            </Container>

            <Button fontSize="13px"
                mt="80px"
                mb="50px"
                p="10px 26px"
                bg="#c6d4d9"
                color="#666"
                display="inline-block"
                cursor="pointer"
                fontFamily="Open Sans"
                borderRadius="50px"
                onClick={handleDeals}
            >View All Offers</Button>

        </Container>
    )
}

export default Home;
