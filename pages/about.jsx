import Head from "next/head";
import { Box, Container, Divider, Heading, SlideFade, Button, Input, HStack } from "@chakra-ui/react";
import Paragraph from "components/Paragraph";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const About = () => {
  const [value, setValue] = useState("");
  const [suggester, setSuggester] = useState("");

  const handleChange = event => setValue(event.target.value);
  const handleSuggester = event => setSuggester(event.target.value);

  const toast = useToast();

  const suggestMovie = async () => {
    if (value && suggester) {
      let res = await fetch(`https://api.airtable.com/v0/app8wGrk12PHgi4xz/movies`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRETABLE_AUTH}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            movie_name: value,
            suggester: suggester,
          },
        }),
      });

      if (res.status == 200) {
        toast({
          title: "Movie added.",
          description: "your suggestion is valuable",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setSuggester("");
        setValue("");
      }
    } else {
      toast({
        title: "I need the movie and you",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Bisar Omer | About</title>
        <meta name="description" content="Bisar Omer | Full stack developer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bisar Omer | Full stack developer" />
        <meta property="og:image" content="https://bisar.vercel.app/meta.png" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading as="h1" fontSize={{ base: "28px", md: "32px", lg: "36px" }} mb={4}>
                About Me
              </Heading>

              <Paragraph fontSize="xl" lineHeight={1.6}>
                Hello, My name is Bisar located in Sulaymaniyah I'm here to solve problems that's why I chose to become a programmer starting with HTML, and CSS at age 14 then got
                to computer science in college and learned my first programming language java.
              </Paragraph>
              <br />
              <Paragraph fontSize="xl" lineHeight={1.6}>
                I have over 2 years of experience as a full-stack developer, building applications that help make people's life easier.
              </Paragraph>

              <Divider mt={5} mb={5} />

              <Heading as="h1" fontSize={{ base: "28px", md: "32px", lg: "36px" }} mb={4}>
                Outside of work
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                Love Movie ❤️ I am open to new suggestions
              </Paragraph>
              <HStack mt={5}>
                <Input value={value} onChange={handleChange} placeholder="Movie's name" />
                <Input value={suggester} onChange={handleSuggester} placeholder="Your Name" />
              </HStack>
              <Button
                onClick={() => {
                  suggestMovie();
                }}
                mt={5}
                colorScheme="yellow"
                borderRadius={5}
                p={3}
                as="a"
              >
                Add Your Suggestion
              </Button>
            </Box>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default About;
