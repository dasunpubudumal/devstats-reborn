import { Heading, Box } from "@chakra-ui/react";
import React from "react";

interface StatsProps {
  children: React.ReactNode;
  heading: React.ReactNode;
}

export const StatsPageWrapper: React.FC<StatsProps> = ({
  children,
  heading,
}) => {
  return (
    <>
      <Box p={10} paddingLeft={20} paddingRight={20}>
        {heading}
        <Box mt={5}>{children}</Box>
      </Box>
    </>
  );
};
