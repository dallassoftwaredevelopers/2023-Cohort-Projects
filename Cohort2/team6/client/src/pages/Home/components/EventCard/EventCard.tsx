import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import { EventCard } from "./EventCard.types";

export default function blogPostWithImage({
  eventId,
  userId,
  title,
  date,
  time,
  description,
  price,
  location,
  image_url,
}: EventCard) {
  return (
    <Center py={6}>
      <Box
        maxW={"auto"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"auto"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          overflow={"hidden"}
        >
          <Image
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            alt="Example"
          />
        </Box>
        <Stack>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>{" "}
          <Text
            colorScheme="teal"
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {date} at {time}
          </Text>
          <Text>{description}</Text> <Text fontWeight={600}>{price}</Text>
          <Text fontWeight={600}>{location}</Text>
        </Stack>
      </Box>
    </Center>
  );
}
