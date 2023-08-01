import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Divider,
  FormErrorMessage,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import { UserState } from "../../types/User.types";
import { useEffect, useState } from "react";
import AlertBar from "../../components/Alert/AlertBar";

type CreateEventForm = {
  uuid: string;
  title: string;
  //date: string;
  //time: string;
  description: string;
  //price: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  image_url: string;
};

export default function Login() {
  const format = (val: string) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, "");
  const [price, setPrice] = useState<string>("1.53");

  const dispatch = useDispatch();
  const [eventCreated, setEventCreated] = useState<boolean>(false);
  // format of date and time "2023-07-29T16:00"
  const [dateTime, setDateTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  // ignore the unsafe assignment, unless you can fix it
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return

  // will have event.error below once eventsReducer integrated into redux store
  //const error = useSelector((state: UserState) => state.user.error);
  const uuid = useSelector((state: UserState) => state.user.uuid);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<CreateEventForm>();
  const onSubmit: SubmitHandler<CreateEventForm> = (data) => {
    try {
      console.log(data);
      console.log(date, time, price);
    } catch (err) {
      // unreachable & don't know why. Error will be handled in redux anyways
      console.log("hi, you wont even see this console.log in the console");
      console.error(err);
    }
  };

  const splitDateTime = (dateTimeStr: string) => {
    const [datePart, timePart] = dateTimeStr.split("T");
    setDate(datePart);
    setTime(timePart);
  };

  // convert dateTime into useable format
  useEffect(() => {
    splitDateTime(dateTime);
  }, [dateTime]);

  return (
    <Stack minH={"80.8vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Log In</Heading>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {eventCreated && (
              <AlertBar message="Login Successful" status="success" />
            )}
            {/* {error && (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              <AlertBar message={error} status="error" />
            )} */}
            <FormControl isInvalid={!!errors.title}>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="What's the title of the event?"
                {...register("title", { required: "Title is required" })}
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.description}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Describe the event for us~~"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel onClick={() => console.log(price)}>Price</FormLabel>
              <NumberInput
                isRequired
                onChange={(e) => setPrice(parse(e))}
                value={format(price)}
                max={1000}
                min={1}
                defaultValue={10}
                precision={2}
                step={0.1}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Date and Time</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                onChange={(e) => setDateTime(e.target.value)}
              />
            </FormControl>
            <FormControl isInvalid={!!errors.address}>
              <FormLabel>Street Address</FormLabel>
              <Input
                placeholder="ex. 123 Park blvd"
                {...register("address", {
                  required: "Street Address is required",
                })}
              />
              <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.city}>
              <FormLabel>City</FormLabel>
              <Input
                placeholder="ex. Fort Worth"
                {...register("city", { required: "City is required" })}
              />
              <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.state}>
              <FormLabel>State</FormLabel>
              <Input
                placeholder="ex. Texas"
                {...register("state", { required: "State is required" })}
              />
              <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.zipCode}>
              <FormLabel>Zip Code</FormLabel>
              <Input
                placeholder="ex. 76137"
                {...register("zipCode", { required: "Zip Code is required" })}
              />
              <FormErrorMessage>{errors.zipCode?.message}</FormErrorMessage>
            </FormControl>
            <Divider mt={4} mb={4} />

            <Flex direction={"row"} gap={3}>
              <Button
                type="submit"
                colorScheme={"teal"}
                variant={"solid"}
                flex={1}
              >
                Create Event
              </Button>
              {/* navigate to home */}
              <Button
                as="a"
                colorScheme="red"
                borderRadius={"5px"}
                textColor={"white"}
                variant="solid"
                flex={1}
                href="/"
              >
                Cancel
              </Button>
            </Flex>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
