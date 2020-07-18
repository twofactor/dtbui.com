import React from "react";
import Head from "next/head";
import {
  ThemeProvider,
  CSSReset,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Code,
} from "@chakra-ui/core";
import { motion } from "framer-motion";

import { Users, Cloud, Award } from "react-feather";

export default function Minecraft() {
  return (
    <ThemeProvider>
      <Head>
        <title>PufferCraft Server</title>
        <link rel="icon" href="/minecraft/pufferfish.png" />
        <meta property="og:title" content="PufferCraft Server" />
        <meta
          property="og:description"
          content="A simple, wholesome, and fun vanilla survivial server."
        />
        <meta property="og:image" content="/minecraft/hangout.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:text:title" content="PufferCraft Server" />
        <meta name="twitter:image" content="/minecraft/hangout.png" />
        <meta property="og:url" content="https://www.dtbui.com/minecraft" />
      </Head>
      <CSSReset />
      <Box
        zIndex="1000"
        width="100%"
        backgroundColor="rgba(255, 255, 255, 0.94)"
        borderBottom="1px solid"
        borderBottomColor="gray.100"
        height="60px"
        position="fixed"
      >
        <Flex
          paddingLeft="32px"
          paddingRight="32px"
          height="100%"
          margin="auto"
          maxWidth="960px"
          alignItems="center"
        >
          <Link href="/minecraft">
            <Code fontWeight="bold">PufferCraft</Code>
          </Link>
          <Flex flexGrow="1" />
          <Button
            size="sm"
            borderRadius="12px"
            boxShadow="sm"
            variantColor="purple"
            border="1px solid"
            borderColor="purple.600"
            as="a"
            href="https://discord.gg/cJfYbwe"
            target="_blank"
          >
            Join The Discord
          </Button>
        </Flex>
      </Box>
      <Box margin="auto" padding="32px" maxWidth="960px">
        <Box mb="24px">
          <Box height="128px" />

          <Heading size="2xl" mb="16px">
            The Best Minecraft Server On The Internet.
          </Heading>
          <Text fontSize="lg" mb="24px">
            The <Code fontWeight="bold">PufferCraft</Code> server is a simple,
            wholesome and fun mostly vanilla survival server.
          </Text>

          <Button
            as="a"
            href="https://discord.gg/cJfYbwe"
            target="_blank"
            borderRadius="16px"
            boxShadow="sm"
            variantColor="purple"
            border="1px solid"
            borderColor="purple.600"
          >
            Join The Discord
          </Button>

          <Box height="96px" />

          <motion.div
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              borderRadius="24px"
              boxShadow="lg"
              src="/minecraft/cityhall.jpg"
            />
          </motion.div>

          <Box height="64px" />
        </Box>
      </Box>
      <Box
        backgroundColor="gray.50"
        paddingTop="96px"
        paddingBottom="64px"
        width="100%"
      >
        <Box margin="auto" padding="32px" maxWidth="960px">
          <Box>
            <Heading size="xl" mb="24px">
              Our Server
            </Heading>
            <Flex flexDirection={["column", "column", "row", "row"]}>
              <Box
                padding="24px"
                paddingTop="32px"
                paddingBottom="32px"
                borderRadius="16px"
                backgroundColor="white"
                boxShadow="md"
                mr={["0px", "0px", "8px", "8px"]}
              >
                <Box mb="16px">
                  <Users color="#6B46C1" />
                </Box>
                <Heading size="lg" mb="16px">
                  Our Community
                </Heading>
                <Text>
                  Our's mission is to create and maintain a kind, enjoyable and
                  super fun global community. We do a lot to support our
                  community, such as organizing and maintaining the discord
                  outside of the game itself to keep us connected even away from
                  the keyboard.
                </Text>
              </Box>
              <Box
                padding="24px"
                paddingTop="32px"
                paddingBottom="32px"
                borderRadius="16px"
                backgroundColor="white"
                boxShadow="md"
                mt={["16px", "16px", "0px", "0px"]}
                ml={["0px", "0px", "8px", "8px"]}
                mr={["0px", "0px", "8px", "8px"]}
              >
                <Box mb="16px">
                  <Cloud color="#6B46C1" />
                </Box>
                <Heading size="lg" mb="16px">
                  Pure Vanilla
                </Heading>
                <Text>
                  <Code fontWeight="bold">PufferCraft</Code> is strictly a
                  vanilla survival server, enabling us to continue to innovate
                  and find new, creative ways to play the game as it was meant
                  to be played. This means no one gets any special advantages
                  within the game, such as paying to win or buying OP spots.
                </Text>
              </Box>
              <Box
                padding="24px"
                paddingTop="32px"
                paddingBottom="32px"
                borderRadius="16px"
                backgroundColor="white"
                boxShadow="md"
                ml={["0px", "0px", "8px", "8px"]}
                mt={["16px", "16px", "0px", "0px"]}
              >
                <Box mb="16px">
                  <Award color="#6B46C1" />
                </Box>
                <Heading size="lg" mb="16px">
                  Our Legacy
                </Heading>
                <Text>
                  As a continuous successor to our founding team's original
                  Minecraft server over 10 years ago, the{" "}
                  <Code fontWeight="bold">PufferCraft</Code> server carries on a
                  long and storied tradition of active, tight, and incredibly
                  ambitious vanilla survival Minecraft servers.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box
        backgroundColor="white"
        paddingTop="64px"
        paddingBottom="64px"
        width="100%"
      >
        <Box margin="auto" padding="32px" maxWidth="1200px">
          <Box margin="auto" padding="32px" maxWidth="960px">
            <Heading size="xl" mb="24px">
              Our Community
            </Heading>
            <Text fontSize="lg" mb="24px">
              The <Code fontWeight="bold">PufferCraft</Code> community is a
              warm, mature, kind community that enjoys hanging out with and
              building cool, ambitious projects together.
            </Text>
          </Box>
          <Flex width="100%" flexWrap="wrap" justifyContent="center">
            <Image
              borderRadius="16px"
              mr="16px"
              mb="16px"
              boxShadow="md"
              maxHeight="260px"
              src="/minecraft/castle.png"
            />
            <Image
              borderRadius="16px"
              mr="16px"
              mb="16px"
              boxShadow="md"
              maxHeight="260px"
              src="/minecraft/end.png"
            />
            <Image
              borderRadius="16px"
              mr="16px"
              mb="16px"
              boxShadow="md"
              maxHeight="260px"
              src="/minecraft/tower.png"
            />
            <Image
              borderRadius="16px"
              mr="16px"
              mb="16px"
              boxShadow="md"
              maxHeight="260px"
              src="/minecraft/house.jpg"
            />
            <Image
              borderRadius="16px"
              mr="16px"
              mb="16px"
              boxShadow="md"
              maxHeight="260px"
              src="/minecraft/hangout.png"
            />
            <Image
              borderRadius="16px"
              mr="16px"
              mb="16px"
              boxShadow="md"
              maxHeight="260px"
              src="/minecraft/warehouses.png"
            />
            <Image
              borderRadius="16px"
              mr="16px"
              mb="16px"
              boxShadow="md"
              maxHeight="260px"
              src="/minecraft/tudor.png"
            />
            <Image
              borderRadius="16px"
              mr="16px"
              mb="16px"
              boxShadow="md"
              maxHeight="260px"
              src="/minecraft/rainynight.png"
            />
            <Image
              borderRadius="16px"
              mr="16px"
              mb="16px"
              boxShadow="md"
              maxHeight="260px"
              src="/minecraft/bar.png"
            />
          </Flex>
        </Box>
      </Box>
      <Box backgroundColor="gray.50" width="100%">
        <Box margin="auto" padding="32px" maxWidth="960px">
          <Box mb="24px">
            <Box height="128px" />
            <Heading size="xl" mb="16px">
              Join us today!
            </Heading>
            <Text fontSize="md" mb="24px">
              Simply hop on the discord and DM{" "}
              <Code fontWeight="bold">@twofactor</Code> for the Server IP.
            </Text>
            <Button
              as="a"
              href="https://discord.gg/cJfYbwe"
              target="_blank"
              borderRadius="16px"
              boxShadow="sm"
              variantColor="purple"
              border="1px solid"
              borderColor="purple.600"
            >
              Join The Discord
            </Button>
            <Box height="96px" />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
