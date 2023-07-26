import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    customScheme: {
      darkBlue: "#23304A",
      lightBlue: "#057ADA",
      tealHover: "45bcbc",
      // Add more shades if needed
    },
  },
});

export default theme;
