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
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type SignUpForm = {
  username: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    register,
  } = useForm<SignUpForm>();
  const onSubmit: SubmitHandler<SignUpForm> = (data) => console.log(data);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const isPasswordMatch = password === confirmPassword;

  return (
    <Stack minH={"80.8vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Create an Account</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="username" isInvalid={!!errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                {...register("username", { required: "Username is required" })}
              />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="confirmPassword"
              isInvalid={!!errors.confirmPassword}
            >
              <FormLabel>Confirm Password</FormLabel>
              <Input
                {...register("confirmPassword", {
                  required: "Confirmation Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <FormErrorMessage>
                {errors.confirmPassword?.message}
              </FormErrorMessage>
            </FormControl>

            {!isPasswordMatch && (
              <FormErrorMessage>Passwords do not match.</FormErrorMessage>
            )}

            <Divider mt={4} mb={4} />

            <Flex direction={"row"} gap={3}>
              <Button
                type="submit"
                colorScheme={"blue"}
                variant={"solid"}
                flex={1}
              >
                Sign Up
              </Button>
              {/* navigate to sign in page */}
              <Button
                as="a"
                colorScheme="teal"
                borderRadius={"5px"}
                textColor={"white"}
                variant="solid"
                flex={1}
                href="/login"
              >
                Login
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
