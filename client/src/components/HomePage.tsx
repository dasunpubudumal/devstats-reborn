import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { PageWrapper } from "./PageWrapper";

interface HomePageProps {
  props: React.ReactNode;
}

export const HomePage: React.FC<HomePageProps> = ({ props }) => {
  return (
    <>
      <PageWrapper>
        <Box p={10} sx={{ "text-align": "justify" }}>
          <Heading>DevStats Profile Analyzer</Heading>
          <Box mt={5}>
            Nostrud exercitation est irure voluptate ipsum aliqua ullamco elit.
            Anim fugiat ad pariatur velit ipsum duis voluptate deserunt. Aliquip
            fugiat culpa ad elit proident sunt ex labore elit pariatur mollit.
            Aute nostrud labore culpa consectetur do in consequat reprehenderit
            elit minim irure consequat ullamco. Tempor aliquip culpa anim nisi
            irure magna velit. Dolor commodo enim veniam sunt do ex pariatur qui
            Lorem consectetur id amet. Culpa commodo enim laborum quis sit
            occaecat tempor tempor dolore minim dolore nulla. Mollit sint non
            consequat Lorem. Fugiat enim magna officia esse quis dolore est
            fugiat et ex. Quis eiusmod non ea esse veniam do exercitation elit
            labore incididunt duis velit. Veniam nulla officia dolor labore
            fugiat ut. Lorem velit est velit sunt. Ipsum tempor fugiat velit
            amet fugiat commodo esse proident sit. Eiusmod dolor incididunt
            ullamco eu. Mollit ea ut minim magna. Ullamco velit laborum enim
            fugiat. Cillum consectetur sunt voluptate deserunt anim nisi nisi
            sint minim aliquip est. Nostrud consectetur ea aliqua ipsum veniam
            sunt cupidatat nisi minim laboris. Irure nulla ipsum est quis in in
            nisi mollit eu est adipisicing cillum labore voluptate. Non dolor et
            sunt in elit laborum in. Incididunt tempor magna nostrud do cillum
            voluptate commodo consequat in et excepteur magna.
          </Box>
        </Box>
      </PageWrapper>
    </>
  );
};
