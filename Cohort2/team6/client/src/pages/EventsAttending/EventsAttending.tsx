import Ticket from "./components/Ticket";
import dummyData from "./dummydata";
import { Text } from "@chakra-ui/react";

const EventsAttending = () => {
  return (
    <>
      <Text
        h={"50px"}
        as={"h1"}
        fontSize={"32px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Events Attending
      </Text>{" "}
      <Ticket dummyData={dummyData} />
    </>
  );
};

export default EventsAttending;
