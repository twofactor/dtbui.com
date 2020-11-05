import Head from "next/head";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import useSWR from "swr";
import useSound from "use-sound";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Container = styled.div`
  font-family: "Comic Sans MS", sans-serif;
`;

const AnimatedLink = (props) => (
  <motion.a whileHover={{ y: -10 }} whileTap={{ scale: 0.9 }} {...props} />
);

const listanimation = { hidden: { opacity: 0 } };
const itemanimation = { hidden: { x: -10, opacity: 0 } };

export default function Home() {
  const [winner, setWinner] = useState();
  const [playSound] = useSound("/bells.mp3");

  const { data, error } = useSWR(
    "https://eos.hyperion.eosrio.io/v2/history/get_actions?limit=1&account=associapress&filter=associapress%3Aelection&sort=desc",
    fetcher
  );

  useEffect(() => {
    const winnerResult = data
      ? JSON.parse(data.actions[0].act.data.data).US.president
      : null;
    setWinner(winnerResult);

    if (winnerResult !== null && winnerResult !== "") {
      playSound();
    }

    console.log("pinging");
  }, [data]);

  return (
    <Container>
      <Head>
        <title>David Bui's Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{winner ? winner : "No Winner Yet"}</h1>
      </main>
    </Container>
  );
}
