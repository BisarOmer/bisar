import Head from "next/head";
import { Box, Container, Heading, SlideFade } from "@chakra-ui/react";
import Paragraph from "components/Paragraph";

const About = () => {
  return (
    <div>
      <Head>
        <title>Bisar Omer | About</title>
        <meta name="description" content="Bisar Omer | Full stack developer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bisar Omer | Full stack developer" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading as="h1" fontSize={{ base: "28px", md: "32px", lg: "36px" }} mb={4}>
                About Me
              </Heading>

              <Paragraph fontSize="xl" lineHeight={1.6}>
                My name is Bisar I'm here to solve problems that's why I chose to become a programmer starting with HTML, and CSS at age 14 then got to computer science in college
                and learned my first programming language java.
              </Paragraph>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default About;
