import * as React from "react";
import {
  ChakraProvider,
  extendTheme,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { PageWrapper } from "./components/PageWrapper";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { ErrorPage } from "./components/ErrorPage";
import { GitHubPage } from "./components/GitHubPage";
import { StackOverflowPage } from "./components/StackOverflowPage";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#44337A",
      100: "#B794F4",
      500: "#B794F4", // you need this
    },
    black: {
      100: "#000000",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage props={undefined} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/github",
    element: <GitHubPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/stackoverflow",
    element: <StackOverflowPage />,
    errorElement: <ErrorPage />,
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <RouterProvider router={router} />
  </ChakraProvider>
);
