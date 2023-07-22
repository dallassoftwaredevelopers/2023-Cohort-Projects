import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

export const DashboardLayout = () => {
  return (
    <Box w="100%" minH="100vh" position="relative">
      <Navbar />
      <Box maxW="1280px" mx="auto" flex="1" px={4} py={8}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
