import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";

import Stack from "components/pages/index/Stack";
import Timeline from "components/pages/index/Timeline";
import Profile from "components/pages/index/Profile";
import Education from "components/pages/index/Eductation";
import Projects from "components/pages/index/Projects";
import Awards from "components/pages/index/Awards";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bisar Omer | Home</title>
        <meta
          name="description"
          content="Bisar Omer | Full stack developer"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta name="color-scheme" content="light" />
        <meta
          property="og:title"
          content="Bisar Omer | Full stack developer"
        />
        <meta property="og:image" content="/meta.png" />
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]}>
          <Profile />
          <Divider my={10} />
          <Stack />
          <Divider my={10} />
          <Timeline />
          <Divider my={10} />
          <Education/>
          <Divider my={10} />
          <Projects/>
          <Divider my={10} />
          <Awards/>
        </Container>
      </main>
    </div>
  );
}
