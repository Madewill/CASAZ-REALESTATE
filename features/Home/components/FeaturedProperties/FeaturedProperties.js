"use client";

import PropertySlider from "./components/PropertySlider/PropertySlider";

const { Box, Text } = require("@chakra-ui/react");

const FeaturedProperties = ({  featuredProperties }) => {
    console.log(featuredProperties);
    return ( 
        <Box maxWidth='1280px' margin='0 auto' color='gray.600' paddingY={{ base: '3rem', sm: '6rem'}}>
        <Text fontSize={{ base: '4xl', sm: '5xl' }} lineHeight='shorter' 
        fontWeight='light' paddingX='2rem' textAlign='center'
        >Discover Our Featured Properties List</Text>
        <Text fontSize='2xl' fontWeight='light' marginTop='1rem' marginBottom='3rem' paddingX='2rem' textAlign='center'>A selection of our best properties.</Text>
        <PropertySlider featuredProperties={featuredProperties} />
        </Box>
     );
}
 
export default FeaturedProperties;