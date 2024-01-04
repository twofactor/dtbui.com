import Head from "next/head";
import React, { useEffect } from "react";
import {
  ChakraProvider,
  CSSReset,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Code,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.querySelector("body").style.background = "#002451";
  }, []);

  return (
    <ChakraProvider>
      <Head>
        <title>About | David Bui</title>
        <meta property="og:title" content="About | David Bui" />
        <meta
          property="og:description"
          content="Hi! I’m David and this is my personal website."
        />
        <link rel="icon" type="image/png" href="/faviconBlue.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CSSReset />

      <Box
        width="100%"
        backgroundColor="#002451"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          maxWidth="664px"
          padding="32px"
          flexDirection={["column", "column", "row", "row"]}
        >
          <Box paddingRight="64px">
            <Link
              fontFamily="Space Mono, Monospace"
              color="#BCDAFF"
              href="/"
              _active={{
                color: "#FFEEAD",
              }}
              _hover={{
                color: "#FFEEAD",
              }}
              fontSize="14px"
              lineHeight="24px"
            >
              David Bui
            </Link>
            <br />
            <Link
              fontFamily="Space Mono, Monospace"
              color="#FFEEAD"
              href="/"
              _active={{
                color: "#FFEEAD",
              }}
              _hover={{
                color: "#FFEEAD",
              }}
              fontSize="14px"
              lineHeight="24px"
            >
              About
            </Link>
            <br />
            <Link
              fontFamily="Space Mono, Monospace"
              color="#EABCFF"
              href="https://www.turtlebay.xyz/"
              target="_blank"
              _active={{
                color: "#FFEEAD",
              }}
              _hover={{
                color: "#FFEEAD",
              }}
              fontSize="14px"
              lineHeight="24px"
            >
              Minecraft
            </Link>
            <br />
            <Link
              fontFamily="Space Mono, Monospace"
              color="#EABCFF"
              href="https://www.instagram.com/ghosttyped/"
              _active={{
                color: "#FFEEAD",
              }}
              _hover={{
                color: "#FFEEAD",
              }}
              fontSize="14px"
              lineHeight="24px"
            >
              Instagram
            </Link>
          </Box>
          <Box marginTop={["32px", "32px", "0", "0"]}>
            <Text
              fontFamily="Space Mono, Monospace"
              color="#BCDAFF"
              fontSize="14px"
              lineHeight="26px"
              marginBottom="0px"
            >
              About Me
            </Text>
            <Text
              fontFamily="Space Mono, Monospace"
              color="#ffffff"
              fontSize="14px"
              lineHeight="24px"
              marginTop="1px"
            >
              Hi! I’m David and this is my personal website.
            </Text>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
