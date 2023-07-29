import { SimpleGrid, Box } from "@chakra-ui/react";
import EventCard from "../EventCard/EventCard";
import { EventTypes } from "../../types/Event.types";

interface EventCardCointainerProps {
  dummyData: EventTypes[];
}
function EventCardContainer({ dummyData }: EventCardCointainerProps) {
  /*
    
    Data called or mapped out from redux store or axios/fetch query
    will have to have Event Card Styled and interface made that's appropriate

    */

  return (
    <SimpleGrid
      minChildWidth={{ base: "330px", lg: "400px", xl: "480px" }}
      spacing="4"
      mx={-4}
    >
      {dummyData.map((event) => (
        <Box key={event.eventId} borderRadius="lg" p="4" mx={0}>
          <EventCard {...event} />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default EventCardContainer;
