import { Box, Heading, LinkOverlay, LinkBox, HStack, useColorModeValue, Tag } from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
      <LinkBox as="article">
        <Box
          w="100%"
          height={{ sm: "auto", md: "170px" }}
          p={4}
          mb={5}
          d="inline-block"
          borderColor={useColorModeValue("gray.200", "gray.700")}
          borderRadius={5}
          borderWidth="1px"
          transition=".5s"
          cursor="pointer"
          role="group"
          _hover={{
            borderColor: "green.300",
          }}
        >
          <Box d="flex" flexDirection="column" alignItems="start" justifyContent="space-between">
            <LinkOverlay href={project?.url} isExternal>
              <Heading as="h6" size="md">
                {project?.title}
              </Heading>
              <Paragraph mt={1} fontSize="sm">
                {project?.description}
              </Paragraph>
            </LinkOverlay>
            <HStack gridRowGap={2} wrap={"wrap"} mt={5}>
              {project?.tags.map((tag, i) => (
                <Tag key={i} colorScheme={tag.color} textTransform="uppercase">
                  {tag.name}
                </Tag>
              ))}
            </HStack>
          </Box>
        </Box>
      </LinkBox>
    </motion.div>
  );
};

export default ProjectCard;
