import { Heading, SlideFade, List, ListItem, ListIcon, Link, Text, Flex } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Timeline = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }} mb={3}>
        Experience
      </Heading>

      {/* 1 */}
      <Flex mt={10} mb={5} justifyContent={"space-between"}>
        <Heading as="h2" size="md">
          <Link color={"green.500"} href="https://netspot.solutions/">
            Netspot Sulotions
          </Link>
          , Full Stack Web Developer
        </Heading>
        <Text fontSize="md">Feb 2022 - Present, Sulaymaniyah</Text>
      </Flex>

      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Implementing Call Detail Record for collecting user’s usage data in 4G system by using golang and NATS as message broker for exchanging data with Online Charging System.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Developing a web-based admin dashboard for managing geolocation data with the highest performance by choosing MongoDB and golang also caching data from server and client
          side.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Maintaining Customer Billing System admin panel, which has been developed in Angularjs, and adding new features with fixing bugs.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Developing and designing the company's website by using Nextjs and Strapi for API and CMS.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Automatic and writing scripts, saving time by automating repeatable tasks.
        </ListItem>
      </List>

      {/* 2 */}
      <Flex mt={10} mb={5} justifyContent={"space-between"}>
        <Heading as="h2" size="md">
          Click Iraq, UI & Frontend Developer
        </Heading>
        <Text fontSize="md">Jun 2021 – Nov 2021, Sulaymaniyah</Text>
      </Flex>

      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Developing a real estate web application with high performance and authentication by using Nextjs.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          UI and UX design for a real estate mobile application then making a prototype for the client review by using Adobe Xd.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Designing a web application to reserve billboard ads.
        </ListItem>
      </List>
    </SlideFade>
  );
};

export default Timeline;
