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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

import { EventTypes } from "../../../types/Event.types";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { getFormattedDate } from "../../../helpers/getFormattedDate";
import { convertTo12HourFormat } from "../../../helpers/convertTo12HourTime";

export default function TicketCard({
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
  const monthAndDay = getFormattedDate(date);
  const convertedTime = convertTo12HourFormat(time);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image_url}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text
            colorScheme="teal"
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"xs"}
            letterSpacing={1.1}
          >
            {monthAndDay} at {convertedTime}
          </Text>
          <hr />
          <Text h={"50px"} fontSize={"14px"}>
            {truncatedDescription}
          </Text>{" "}
        </CardBody>

        <CardFooter display={"flex"} flexDirection={"column"}>
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
        </CardFooter>
      </Stack>
    </Card>
  );
}
