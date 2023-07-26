import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";

import { EventTypes } from "./EventCard.types";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function EventCard({
  eventId,
  userId,
  title,
  date,
  time,
  description,
  price,
  location,
  image_url,
}: EventTypes) {
  const truncatedDescription =
    description.length > 60 ? description.slice(0, 100) + "..." : description;
  const locationArr = location.split(",");
  const cityState = locationArr.slice(-3, -1).join(", "); // Get the last 3 elements and join them back with a comma and space

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
        <Flex
          h={"auto"}
          minH={{ base: "250px" }}
          direction="column"
          justifyContent="space-evenly"
        >
          <Flex
            direction="row"
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={"teal"}
              fontSize={"3xl"}
              fontFamily={"body"}
            >
              {title}
            </Heading>
            <Text
              colorScheme="teal"
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"xs"}
              letterSpacing={1.1}
            >
              {date} at {time}
            </Text>
          </Flex>
          <hr />
          <Text h={"50px"}>{truncatedDescription}</Text>{" "}
          <Flex
            direction="row"
            w={"100%"}
            alignItems={"flex-end"}
            justifyContent={"space-between"}
          >
            <Text fontWeight={600} fontSize={"1.4rem"}>
              {cityState}
            </Text>
            <a href="www.google.com">
              <Button
                fontSize={{ base: "md", lg: "lg" }}
                colorScheme="teal"
                zIndex={2}
                cursor={"pointer"}
                width={"auto"}
              >
                View Event <ArrowRightIcon ml={4} boxSize={3} mb={0.5} />
              </Button>
            </a>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}
