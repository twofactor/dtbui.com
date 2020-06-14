import Head from "next/head";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Container = styled.div`
  font-family: "Comic Sans MS", sans-serif;
`;

const AnimatedLink = (props) => (
  <motion.a whileHover={{ y: -10 }} whileTap={{ scale: 0.9 }} {...props} />
);

export default function Home() {
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

        <ul>
          <li>
            <AnimatedLink href="/">Home</AnimatedLink>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/ghosttyped">
              Twitter
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.powhattan.org/">
              Minecraft
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:david@dtbui.com">
              Contact Me
            </a>
          </li>
        </ul>
      </main>
    </Container>
  );
}
