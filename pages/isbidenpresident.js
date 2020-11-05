import React, { useEffect, useState } from "react";
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
  Avatar,
} from "@chakra-ui/core";
import { motion } from "framer-motion";

import { Users, Cloud, Award } from "react-feather";

export default function Minecraft() {
  return (
    <ThemeProvider>
      <Head>
        <title>PufferCraft Dashboard</title>
        <link rel="icon" href="/minecraft/pufferfish.png" />
        <meta property="og:title" content="PufferCraft Server" />
        <meta
          property="og:description"
          content="Live updates for the Puffercraft Server including who's online!"
        />
        <meta property="og:image" content="/minecraft/hangout.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:text:title" content="PufferCraft Dashboard" />
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
            <Code fontWeight="bold" mr="8px">
              PufferCraft
            </Code>
            <Code variantColor="purple" fontWeight="bold">
              Dashboard
            </Code>
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
          <Box height="96px" />

          <ServerStatus />

          <Box height="64px" />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function ServerStatus() {
  const [online, setOnline] = useState();
  const [players, setPlayers] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://eos.hyperion.eosrio.io/v2/history/get_actions?limit=1&account=associapress&filter=associapress%3Aelection&sort=desc"
        );
        const response = await res.json();
        const data = JSON.parse(response.actions[0].act.data.data);
        if (res.ok) {
          console.log(data.US.president);
        } else {
          //if error, default to no users shown/found state
          setOnline([]);
          setPlayers([]);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Flex alignItems="center" mb="12px">
        <Heading size="xl" mr="12px" mb="8px">
          Server Status: {online ? "Online" : "Offline"}
        </Heading>
        {online ? (
          <Box
            width="24px"
            height="24px"
            borderRadius="100px"
            backgroundColor="green.500"
          />
        ) : (
          <Box
            width="24px"
            height="24px"
            borderRadius="100px"
            backgroundColor="red.500"
          />
        )}
      </Flex>

      {players ? (
        <>
          <Text fontSize="md" mb="12px">
            {players.length} active players:
          </Text>
          {players.map((player) => {
            return (
              <Flex alignItems="center" mb="12px">
                <Avatar mr="12px" size="sm" src={player.profile} />
                <Text fontWeight="bold" fontSize="lg">
                  {player.player}
                </Text>
              </Flex>
            );
          })}
        </>
      ) : (
        <Text fontSize="md" mb="24px">
          No Active Players
        </Text>
      )}
    </motion.div>
  );
}
