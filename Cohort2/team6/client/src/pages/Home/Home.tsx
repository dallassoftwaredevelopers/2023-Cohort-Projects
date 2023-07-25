import { Box, Heading } from "@chakra-ui/react";
import Carousel from "../Home/components/Carousel/Carousel";
import EventCardContainer from "../Home/components/EventCardContainer/EventCardContainer";

export const Home = () => {
  return (
    <Box>
      <Carousel />
      <EventCardContainer />
    </Box>
  );
};
