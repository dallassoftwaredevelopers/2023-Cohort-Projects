import { SimpleGrid, Box } from "@chakra-ui/react";
import EventCard from "../EventCard/EventCard";
function EventCardContainer() {
  /*
    
    Data called or mapped out from redux store or axios/fetch query
    will have to have Event Card Styled and interface made that's appropriate

    */
  const data = [
    { id: 1, title: "Card 1", content: "Content of Card 1" },
    { id: 2, title: "Card 2", content: "Content of Card 2" },
    { id: 3, title: "Card 3", content: "Content of Card 3" },
    { id: 4, title: "Card 4", content: "Content of Card 4" },
    { id: 5, title: "Card 5", content: "Content of Card 5" },
    // Add more data for additional cards...
  ];
  return (
    <SimpleGrid minChildWidth={{ base: "340px", md: "500px" }} spacing="4">
      {data.map((item) => (
        <Box key={item.id} borderRadius="lg" p="4">
          <EventCard />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default EventCardContainer;
