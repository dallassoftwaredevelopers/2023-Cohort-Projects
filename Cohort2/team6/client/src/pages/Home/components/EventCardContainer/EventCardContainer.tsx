import { SimpleGrid, Box } from "@chakra-ui/react";
import EventCard from "../EventCard/EventCard";
function EventCardContainer() {
  /*
    
    Data called or mapped out from redux store or axios/fetch query
    will have to have Event Card Styled and interface made that's appropriate

    */
  const dummyData = [
    {
      eventId: "1",
      userId: "user1",
      title: "Event 1",
      date: "2023-07-30",
      time: "15:00",
      description:
        "This is Event 1 This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1This is Event 1",
      price: 10,
      location: "Sample Location 1",
      image_url: "https://example.com/image1.jpg",
    },
    {
      eventId: "2",
      userId: "user2",
      title: "Event 2",
      date: "2023-08-05",
      time: "18:30",
      description: "This is Event 2",
      price: 15,
      location: "Sample Location 2",
      image_url: "https://example.com/image2.jpg",
    },
    // Add more objects for the remaining 4 events...
    {
      eventId: "6",
      userId: "user6",
      title: "Event 6",
      date: "2023-09-20",
      time: "12:00",
      description: "This is Event 6",
      price: 20,
      location: "Sample Location 6",
      image_url: "https://example.com/image6.jpg",
    },
  ];
  return (
    <SimpleGrid
      minChildWidth={{ base: "330px", lg: "400px", xl: "480px" }}
      spacing="4"
      mx={-4}
    >
      {dummyData.map((event) => (
        <Box key={event.eventId} borderRadius="lg" p="4">
          <EventCard {...event} />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default EventCardContainer;
