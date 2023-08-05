import { EventTypes } from "../../../types/Event.types";
import { VStack, Box } from "@chakra-ui/react";
import TicketCard from "./TicketCard";

interface EventCardCointainerProps {
  dummyData: EventTypes[];
}

const Ticket = ({ dummyData }: EventCardCointainerProps) => {
  return (
    <VStack spacing={4} >
      {dummyData.map((event) => (
        <Box key={event.eventId} borderRadius="lg" p="4" w="100%" >
          <TicketCard {...event} />
        </Box>
      ))}
    </VStack>
  );
};

export default Ticket;
