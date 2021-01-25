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

export default function Home() {
  return (
    <ChakraProvider>
      <head>
        <title>David's Dog Fan Page</title>
      </head>
      <CSSReset />
      <Box
        width="100%"
        padding="12px"
        minHeight="100vh"
        backgroundImage="url(/background.gif)"
        flexDirection="column"
      >
        <Heading size="lg" mb="24px" fontFamily="Comic Sans MS" color="#FF00FF">
          BE SURE TO CHECK OUT MY MINECRAFT SERVER AT{" "}
          <Link color="#0000FF" href="/minecraft">
            DTBUI.COM/MINECRAFT
          </Link>
        </Heading>
        <Box margin="auto">
          <Flex justifyContent="center" alignItems="flex-end">
            <Image boxSize="200px" src="/mori.png" mr="12px" />
            <Box mr="12px">
              <center>
                <Image
                  src="/welcome.jpg"
                  maxWidth="250px"
                  mr="12px"
                  mb="12px"
                />
              </center>
              <Heading
                size="2xl"
                color="#0000ff"
                fontFamily="Times New Roman, Serif"
              >
                Welcome To My Web Homepage
              </Heading>
            </Box>
            <Image src="/mori.png" boxSize="200px" />
          </Flex>
          <Box
            mt="24px"
            width="100%"
            height="2px"
            backgroundColor="#666666"
            borderTop="2px solid #666"
            borderBottom="2px solid #ddd"
          ></Box>
        </Box>
        <Box margin="auto" mt="12px">
          <center>
            <Heading size="xl" fontFamily="Comic Sans MS" mb="12px">
              Hi! My name is David, and this is my web page. This web page is a
              fan page for my wonderful dog Mori. He is a very good boy!
            </Heading>
          </center>
          <center>
            <Flex maxWidth="100vw" justifyContent="center">
              <Image src="/sleep.png" boxSize="300px" mr="12px" />
              <Image src="/blep.png" boxSize="350px" mr="12px" />
              <Image src="/sleep2.png" boxSize="400px" mr="12px" />
            </Flex>
          </center>
          <Box
            mt="24px"
            width="100%"
            height="2px"
            backgroundColor="#666666"
            borderTop="2px solid #666"
            borderBottom="2px solid #ddd"
          ></Box>
          <Heading
            size="lg"
            color="#ff00ff"
            fontFamily="Comic Sans MS"
            mb="12px"
            textAlign="center"
          >
            Mori is some kind of mix of herding dogs! Could he be a collie? An
            aussie? No idea! But he looks like some kind of mix of the herding
            breeds so he's probably mostly some of them. I like to call him a
            "doggy dog".
          </Heading>
          <center>
            <Flex>
              <Image src="/dogrun.gif" mb="12px" />
              <Image src="/dogrun.gif" mb="12px" />
              <Image src="/dogrun.gif" mb="12px" />
              <Image src="/dogrun.gif" mb="12px" />
            </Flex>
          </center>
          <Heading
            size="lg"
            color="#0000ff"
            fontFamily="Comic Sans MS"
            mb="12px"
            textAlign="center"
          >
            Mori lives with me, David, in San Francisco, California! (And
            sometimes he lives with me and my parents as well in Orange County,
            California.)
          </Heading>
          <Flex maxWidth="100vw" justifyContent="center">
            <Image src="/beach.png" boxSize="300px" mr="12px" />
            <Image src="/home.png" boxSize="400px" mr="12px" />
            <Image src="/bridge.png" boxSize="350px" mr="12px" />
          </Flex>
          <Box
            mt="24px"
            width="100%"
            height="2px"
            backgroundColor="#666666"
            borderTop="2px solid #666"
            borderBottom="2px solid #ddd"
            mb="24px"
          ></Box>
          <Flex
            justifyContent="center"
            padding="12px"
            backgroundImage="url(/bones.jpg)"
            border="2px solid #ddd"
          >
            <Image src="/david.png" boxShadow="xl" boxSize="400px" mr="12px" />
            <Box>
              <Heading
                size="xl"
                color="#0000ff"
                fontFamily="Times New Roman"
                mb="12px"
                textAlign="center"
              >
                About The Owner
              </Heading>
              <Image src="/dog.gif" mb="12px" />
              <Heading
                size="md"
                color="#000000"
                fontFamily="Comic Sans MS"
                mb="12px"
                maxWidth="400px"
              >
                Hi! I'm David and this is my personal website. I hope you like
                it :)
              </Heading>
              <Heading
                size="md"
                color="#000000"
                fontFamily="Comic Sans MS"
                mb="12px"
                maxWidth="400px"
              >
                In addition to spending time with Mori--I love animals so
                much!--I also enjoy spending my time during quarantine playing
                video games with my friends and drinking tea and coffee. Check
                out my{" "}
                <Link href="/minecraft" color="#0000ff" target="_blank">
                  Minecraft server!
                </Link>
              </Heading>
              <Heading
                size="md"
                color="#000000"
                fontFamily="Comic Sans MS"
                mb="12px"
                maxWidth="400px"
              >
                I like to code and build things too! I currently work at{" "}
                <Link href="http://stripe.com/" color="#0000ff" target="_blank">
                  Stripe
                </Link>{" "}
                as a software engineer. Before that I spent time bouncing around
                and was also a Product Designer at{" "}
                <Link
                  href="https://www.facebook.com/"
                  color="#0000ff"
                  target="_blank"
                >
                  Facebook!
                </Link>
              </Heading>
              <Heading
                size="md"
                color="#000000"
                fontFamily="Comic Sans MS"
                mb="12px"
                maxWidth="400px"
              >
                Feel free to reach out to me at{" "}
                <Link
                  href="mailto:uselestufdb@gmail.com"
                  color="#0000ff"
                  target="_blank"
                >
                  uselestufdb@gmail.com
                </Link>
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
