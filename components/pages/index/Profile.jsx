import { Box, Heading, SlideFade, Image, LightMode, Button, ButtonGroup, HStack } from "@chakra-ui/react";
import Paragraph from "../../Paragraph";

const Profile = () => {
  return (
    <SlideFade in={true} offsetY={80}>
      <Box>
        <Heading as="h1" fontSize={{ base: "28px", md: "40px", lg: "48px" }} mb={3}>
          I’m Bisar Omer
        </Heading>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Full Stack Developer <br />
        </Paragraph>
        <Box mt={10}>
          <LightMode>
            <ButtonGroup>
              <Button colorScheme="green" href="https://drive.google.com/file/d/1o8xryeae8nbFIE1iM_6OVDHFLmAN8OgR/view?usp=sharing" borderRadius={5} p={3} as="a" target={"_blank"}>
                My Resume
              </Button>
            </ButtonGroup>
          </LightMode>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default Profile;
