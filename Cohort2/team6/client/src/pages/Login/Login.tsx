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
import { useForm, SubmitHandler } from "react-hook-form";

// testing for manually setting a jwtToken as the cookie
import Cookies from "js-cookie";
// decode jwt token set by backend cookie
import jwt_decode from "jwt-decode";

import { useDispatch, useSelector } from "react-redux";
import {
  loginUserAsyncThunk,
  resetUserError,
  loginUser,
} from "../../redux/reducers/userReducer";
import { User, UserState } from "../../types/User.types";
import { useEffect, useState } from "react";
import AlertBar from "../../components/Alert/AlertBar";

type LoginForm = {
  username: string;
  password: string;
};

export default function Login() {
  const dispatch = useDispatch();
  const [loginSuccessful, setLoginSuccessful] = useState<boolean>(false);
  // ignore the unsafe assignment, unless you can fix it
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
  //const error = useSelector((state: UserState) => state.user.error);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    try {
      setFakeCookie();
      // ignore error below, needs away, if you can fix the typescript error even better - Kurtis

      // currently setup to bypass backend communication
      // await dispatch(loginUserAsyncThunk(data));
      const jwtToken = getJwtToken();

      // Check if the token exists before dispatching the action
      if (jwtToken) {
        setLoginSuccessful(true);
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        const decodedToken = jwt_decode(jwtToken) as User;
        // Now you can dispatch the action with the correct payload
        dispatch(
          loginUser({
            username: decodedToken.username,
            uuid: decodedToken.uuid,
            isLoggedIn: true,
          })
        );
      }
    } catch (err) {
      // unreachable & don't know why. Error will be handled in redux anyways
      console.log("hi, you wont even see this console.log in the console");
    }
  };

  // handling of fake cookie for test configuration purposes
  const setFakeCookie = () => {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imt1cnRpcyIsInV1aWQiOiI4MDA4MTM1In0.IxsDynjEBAnZXqlPIPFlPHtLfLfaaW1GbHqJDTIqSBQ";

    // Set the "jwtToken" cookie with the JWT token and an expiration date (e.g., 7 days)
    Cookies.set("jwtToken", jwtToken, { expires: 7, path: "/" });
  };

  const getJwtToken = () => {
    const token = Cookies.get("jwtToken");
    return token;
  };

  // clears errors
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dispatch(resetUserError());
  }, []);

  useEffect(() => {
    if (loginSuccessful) {
      // Set a timeout to redirect after 4 seconds
      const timeout = setTimeout(() => {
        window.location.href = "/";
      }, 4000);

      // Clear the timeout when the component is unmounted
      return () => clearTimeout(timeout);
    }
  }, [loginSuccessful]);

  return (
    <Stack minH={"80.8vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Log In</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            {loginSuccessful && (
              <AlertBar message="Login Successful" status="success" />
            )}
            {/* {error && (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              <AlertBar message={error} status="error" />
            )} */}
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                {...register("username", { required: "Username is required" })}
              />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Divider mt={4} mb={4} />

            <Flex direction={"row"} gap={3}>
              <Button
                type="submit"
                colorScheme={"blue"}
                variant={"solid"}
                flex={1}
              >
                Login
              </Button>
              {/* navigate to sign in page */}
              <Button
                as="a"
                colorScheme="teal"
                borderRadius={"5px"}
                textColor={"white"}
                variant="solid"
                flex={1}
                href="/sign-up"
              >
                Sign Up
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
