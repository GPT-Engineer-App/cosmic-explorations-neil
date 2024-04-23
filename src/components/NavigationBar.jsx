import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Flex as="nav" bg="blue.500" color="white" padding="4" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" px="4">
          Home
        </Link>
        <Link as={RouterLink} to="/stargazing" px="4">
          Stargazing Guide
        </Link>
      </Box>
    </Flex>
  );
}

export default NavigationBar;
