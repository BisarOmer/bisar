import {
  Box,
  Stack,
  Text,
  Container,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "../Logo";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Container maxW="container.lg">
      <Stack
        direction="row"
        spacing="4"
        align="center"
        justify="space-between"
        pb={5}
      >
        <Logo />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/bisaromer/"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://www.github.com/bisarahmed"
            aria-label="Github"
            icon={<FaGithub fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://www.twitter.com/bisaromer/"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
      <Divider pt={2} />
      <Stack direction="row" align="center" justify="space-between" pt={5}>
        <Text fontSize="md">
          &copy; {new Date().getFullYear()} Bisar Omer Ahmed
        </Text>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
