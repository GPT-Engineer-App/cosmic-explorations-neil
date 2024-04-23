// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Heading, Text, Button, Image, Link, VStack, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaBook, FaPodcast, FaStar, FaQuestion, FaChalkboardTeacher, FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="black" color="white" minH="100vh">
      <Flex direction="column" align="center" justify="center" p={8}>
        <Heading as="h1" size="2xl" fontWeight="bold" mb={4}>
          Cosmic Explorations with Neil deGrasse Tyson
        </Heading>
        <Text fontSize="xl" mb={6}>
          Dive into the mysteries of the universe!
        </Text>
        <Image src="https://images.unsplash.com/photo-1656542198209-4758a1afc42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYXxlbnwwfHx8fDE3MTM4Mzk0Mzd8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" mb={6} />
        <Button colorScheme="purple" leftIcon={<FaStar />} mb={4}>
          Explore the Stars
        </Button>
        <Text fontSize="lg" fontStyle="italic">
          Cosmic Fact of the Day: "The Sun contains 99.8% of the total mass of the Solar System."
        </Text>
      </Flex>

      <VStack spacing={8} p={8}>
        <Section icon={FaHome} title="Dynamic Homepage" description="Catch the latest talks, books, and a daily cosmic fact to share with friends." />
        <Section icon={FaBook} title="The Universe Unraveled" description="Engaging articles that make complex space science understandable and awe-inspiring." />
        <Section icon={FaPodcast} title="Beyond the Bookshelf" description="Curated documentaries, podcasts, and resources for the space enthusiast." />
        <Section icon={FaChalkboardTeacher} title="For Educators" description="Downloadable lesson plans aligned with school science standards." />
        <Section icon={FaQuestion} title="Ask Dr. Tyson" description="Submit your questions and get answers from Neil in a monthly video or blog post." />
      </VStack>
    </Box>
  );
};

const Section = ({ icon, title, description }) => (
  <Flex align="center" w="full">
    <Icon as={icon} w={10} h={10} color="purple.300" mr={4} />
    <Box>
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  </Flex>
);

export default Index;
