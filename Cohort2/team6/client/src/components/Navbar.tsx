import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";

import { Link as ReactRouterLink } from "react-router-dom";

const links = {
  notLoggedIn: [
    { name: "Login", url: "/login" },
    { name: "Sign Up", url: "/sign-up" },
  ],
  loggedIn: [
    { name: "Events", url: "" },
    { name: "Create Event", url: "" },
  ],
};



export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Box bg="white" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* navbar view for med+ */}
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* set md inside in order to get proper alignment on mobile and desktop res */}
          {/* ham on left by default, sets to right on desktop via modifiers  */}

          <HStack
            spacing={8}
            alignItems={"center"}
            w={{ md: "100%" }}
            justifyContent={{ md: "space-between" }}
          >
            <Text as="h1" color="teal">
              Eventli
            </Text>
            <HStack
              paddingRight={"6"}
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {/* normal size links */}
              {(isLoggedIn ? links.loggedIn : links.notLoggedIn).map((link) => (
                <Link
                  key={uuidv4()}
                  textAlign={"center"}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "#149a9a",
                    textColor: "white",
                  }}
                  href={link.url}

                >
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>
          {/* hamburger menu */}
          {/* only show if logged in, will contain logout which resets state persistence store and redirect to home */}
          {isLoggedIn? (
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Box position="relative">
                    <Avatar size={"sm"} src={"https://bit.ly/broken-link"} />
                  </Box>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    _hover={{
                      textDecoration: "none",
                      bg: "#149a9a",
                      textColor: "white",
                    }}
                  >
                    Account Info
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      textDecoration: "none",
                      bg: "#149a9a",
                      textColor: "white",
                    }}
                  >
                    <Link as={ReactRouterLink} to="/events-attending">
                      Events Attending
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    _hover={{
                      textDecoration: "none",
                      bg: "#149a9a",
                      textColor: "white",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ): <div style={{height: '20px', width: '20px'}}></div>}
        </Flex>
        {/* hamburg menu small res */}
        {isOpen && (
          <Box pb={4} display={{ md: "none" }} >
            <Stack as={"nav"} spacing={4}>
              {(isLoggedIn ? links.loggedIn : links.notLoggedIn).map((link) => (
                <Link
                  key={uuidv4()}
                  textAlign={"center"}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "#149a9a",
                    textColor: "white",
                  }}
                  href={link.url}

                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}
