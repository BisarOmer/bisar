import { Heading, SlideFade, Text, Flex, Link } from "@chakra-ui/react";
import Paragraph from "components/Paragraph";
const Awards = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }} mb={3}>
        Awards
      </Heading>

      {/* 1 */}
      <Flex mt={10} mb={5} justifyContent={"space-between"}>
        <Heading as="h2" size="md">
          <Link color={"green.500"} href="https://www.facebook.com/hackasuly/">
            HackaSuly
          </Link>
        </Heading>
        <Text fontSize="md">Oct 2019, Sulaymaniyah</Text>
      </Flex>
      <Paragraph fontSize="xl" lineHeight={1.6}>
        Participating in hackasuly hackathon for 3 days, our project was for e-government by making the student transfer between universities systematic.
      </Paragraph>
    </SlideFade>
  );
};

export default Awards;
