import {
  Box,
  Heading,
  SlideFade,
  Link,
  LightMode,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Paragraph from "../../Paragraph";

const Profile = () => {
  return (
    <SlideFade in={true} offsetY={80}>
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          mb={3}
        >
          I’m Bisar Omer
        </Heading>
        <Paragraph fontSize="2xl" lineHeight={1.6}>
          Full Stack  Developer <br />
        </Paragraph>
        <Box mt={10}>
          <LightMode>
            <ButtonGroup>
              <Button
                colorScheme="green"
                bg="green.500"
                href="mailto:biisaromer@gmail.com"
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaEnvelope />}
              >
                Biisaromer@gmail.com
              </Button>
              <Button
                colorScheme="green"
                bg="green.500"
                href=" https://wa.me/+9647511823161"
                borderRadius={5}
                p={3}
                as="a"
                leftIcon={<FaWhatsapp />}
              >
                WhatsApp
              </Button>
            </ButtonGroup>
          </LightMode>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default Profile;
