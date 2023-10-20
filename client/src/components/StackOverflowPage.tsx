import React from "react";
import { StatsPageWrapper } from "./StatsPageWrapper";
import { Heading, Text } from "@chakra-ui/react";

export const StackOverflowPage = () => {
  return (
    <>
      <StatsPageWrapper heading={<Heading>StackOverflow Profile</Heading>}>
        <Text>Hello World!</Text>
      </StatsPageWrapper>
    </>
  );
};
