import { Flex } from "@chakra-ui/react";
import React from "react";

interface PageWrapperChildren {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperChildren> = ({ children }) => {
  return (
    <>
      <Flex
        p={5}
        h="100%"
        alignItems="center"
        alignContent="center"
        justifyItems="center"
        justifyContent="center"
      >
        {children}
      </Flex>
    </>
  );
};
