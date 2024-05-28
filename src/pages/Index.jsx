import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/world" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            World
          </Link>
          <Link as={RouterLink} to="/business" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Business
          </Link>
          <Link as={RouterLink} to="/markets" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Markets
          </Link>
          <Link as={RouterLink} to="/opinion" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Opinion
          </Link>
          <Link as={RouterLink} to="/tech" p={2} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Tech
          </Link>
        </Flex>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={4} my={4}>
        <Heading as="h2" size="xl" mb={2}>
          Featured Article
        </Heading>
        <Text fontSize="lg">
          This is the main headline of the featured article. It is prominently displayed to catch the reader's attention.
        </Text>
      </Box>

      {/* Grid Layout for Additional Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        <Box bg="gray.200" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Article 1
          </Heading>
          <Text>
            Summary of the first article. This is a brief description to give readers an idea of the content.
          </Text>
        </Box>
        <Box bg="gray.200" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Article 2
          </Heading>
          <Text>
            Summary of the second article. This is a brief description to give readers an idea of the content.
          </Text>
        </Box>
        <Box bg="gray.200" p={4}>
          <Heading as="h3" size="md" mb={2}>
            Article 3
          </Heading>
          <Text>
            Summary of the third article. This is a brief description to give readers an idea of the content.
          </Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between">
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none", color: "gray.400" }}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Contact
          </Link>
          <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Privacy Policy
          </Link>
          <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Terms of Service
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;