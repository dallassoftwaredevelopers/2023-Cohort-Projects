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
} from "@chakra-ui/react";
import { useState } from "react";

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
    });
  };
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
    console.log(formData);
  };

  const checkPasswordsMatch = () => {
    const passwordsMatch = formData.password === formData.confirmPassword;
    setPasswordsMatch(passwordsMatch);

    if (passwordsMatch) {
      console.log("resetting");
      handleReset();
    }
  };

  const handleSubmit = () => {
    checkPasswordsMatch();

    // No need to check passwordsMatch here anymore
    // since handleReset is already called in checkPasswordsMatch.

    /* if (!passwordsMatch) {
      // Passwords don't match, prevent form submission
      return;
    } */

    // Perform form submission logic here
  };
  return (
    <Stack minH={"80.8vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Create an Account</Heading>

          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              autoComplete={"off"}
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              autoComplete={"off"}
              value={formData.password}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              autoComplete={"off"}
              value={formData.confirmPassword}
              onChange={(e) => {
                handleChange("confirmPassword", e.target.value);
              }}
            />
          </FormControl>
          {!passwordsMatch && (
            <div style={{ color: "#f73f3f", fontWeight: "600" }}>
              Passwords do not match.
            </div>
          )}
          <Divider mt={4} mb={4} />

          <Flex direction={"row"} gap={3}>
            <Button
              type="submit"
              colorScheme={"blue"}
              variant={"solid"}
              flex={1}
              onClick={handleSubmit}
            >
              Register
            </Button>
            {/* navigate to sign in page */}
            <Button
              as="a"
              colorScheme="teal"
              borderRadius={"5px"}
              textColor={"white"}
              variant="solid"
              flex={1}
              href="/"
            >
              Sign in
            </Button>
          </Flex>
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
