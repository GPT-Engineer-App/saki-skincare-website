import { Container, Heading, Text, VStack, Button, Image, Box } from "@chakra-ui/react";
import { FaLeaf, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="pink.100" w="full" p={10} textAlign="center">
        <Heading as="h1" size="2xl" mb={2} color="pink.800">
          Saki Skincare
        </Heading>
        <Text fontSize="xl" color="pink.600">
          Natural beauty solutions for every skin type.
        </Text>
      </Box>

      <VStack spacing={8} my={10} align="stretch">
        <Image src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzfGVufDB8fHx8MTcxNTMwNDQ0OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg" color="pink.700">
            Our Philosophy
          </Heading>
          <Text fontSize="md" color="gray.600">
            At Saki, we believe in the power of nature to deliver tangible results you can see and feel. Our products are crafted with the finest natural ingredients, ensuring they are gentle yet effective.
          </Text>
        </VStack>

        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg" color="pink.700">
            Featured Products
          </Heading>
          <Box d="flex" justifyContent="space-around">
            <Image src="https://images.unsplash.com/photo-1534143826428-81fc61582afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwZmFjZSUyMGNyZWFtfGVufDB8fHx8MTcxNTMwNDQ0OXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="full" />
            <Image src="https://images.unsplash.com/photo-1564278047230-a632a9d6acf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBza2luY2FyZSUyMG9pbHxlbnwwfHx8fDE3MTUzMDQ0NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="full" />
            <Image src="https://images.unsplash.com/photo-1598460880248-71ec6d2d582b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFjaWFsJTIwY2xlYW5zZXJ8ZW58MHx8fHwxNzE1MzA0NDUwfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="full" />
          </Box>
          <Button colorScheme="pink" variant="solid" size="lg">
            Shop Now
          </Button>
        </VStack>
      </VStack>

      <Box bg="pink.200" w="full" p={5} textAlign="center">
        <Text fontSize="lg" color="pink.800">
          Follow us on Social Media
        </Text>
        <Box mt={3}>
          <Button as="a" href="https://instagram.com" leftIcon={<FaInstagram />} colorScheme="pink" variant="ghost">
            Instagram
          </Button>
          <Button as="a" href="https://twitter.com" leftIcon={<FaTwitter />} colorScheme="pink" variant="ghost">
            Twitter
          </Button>
          <Button as="a" href="https://facebook.com" leftIcon={<FaFacebook />} colorScheme="pink" variant="ghost">
            Facebook
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
