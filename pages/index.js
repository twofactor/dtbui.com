import Head from "next/head";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import useSWR from "swr";

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
  const [links, setLinks] = useState();

  const { data, error } = useSWR("/api/links", fetcher);

  useEffect(() => {
    setLinks(data);
  }, [data]);

  return (
    <Container>
      <Head>
        <title>David Bui's Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a href="/">~davidbui's home page</a>
        </h1>

        <p className="description">
          Hi! Welcome to the web homepage of David Bui
        </p>

        <hr />
        <motion.ul>
          {links ? (
            links.map((link) => (
              <motion.li key={link.link}>
                <a target="_blank" href={link.link}>
                  {link.title}
                </a>
              </motion.li>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </motion.ul>
      </main>
    </Container>
  );
}
