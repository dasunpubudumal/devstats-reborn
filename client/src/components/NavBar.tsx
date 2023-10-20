import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Button,
  Stack,
} from "@chakra-ui/react";
import { FaGithub, FaStackOverflow } from "react-icons/fa";

export const NavBar = () => {
  return (
    <>
      <Box
        bg={"gray.50"}
        px={4}
        minH={70}
        backdropFilter="blur(8px)"
        boxShadow="xs"
        sx={{ position: "sticky", top: 0, background: "transparent" }}
      >
        <Flex alignItems="center" justifyContent={"space-between"} h={16}>
          <Box>
            <a href="/">
              <Heading as={"h3"} size={"md"}>
                DevStats: Reborn
              </Heading>
            </a>
          </Box>
          <Spacer />
          <Box>
            <Stack direction={"row"} spacing={2}>
              <a href="/github">
                <Button
                  bg="blackAlpha.900"
                  color={"white"}
                  variant="solid"
                  leftIcon={<FaGithub />}
                >
                  GitHub
                </Button>
              </a>
              <a href="/stackoverflow">
                <Button
                  colorScheme="orange"
                  variant="solid"
                  leftIcon={<FaStackOverflow />}
                >
                  StackOverflow
                </Button>
              </a>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
