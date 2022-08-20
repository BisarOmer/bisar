import { Heading, SlideFade, Text, Flex, Stack, Badge } from "@chakra-ui/react";
import { MdHistoryEdu } from "react-icons/md";

const Education = () => {
  const uosSubjects = [
    { subject: "Operating System" },
    { subject: "OOP" },
    { subject: "Databse" },
    { subject: "Network" },
    { subject: "Computer Architecture" },
    { subject: "Compiler" },
    { subject: "AI" },
    { subject: "Cyber Security" },
    { subject: "GIS" },
    { subject: "Web Development" },
    { subject: "Mobile Application" },
    { subject: "information system" },
  ];

  const englishSubjects = [{ subject: "american english file 1" }, { subject: "american english file 2" }, { subject: "american english file 3" }];

  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }} mb={3}>
        Education
      </Heading>

      {/* 1 */}
      <Flex mt={10} mb={5} justifyContent={"space-between"}>
        <Heading as="h2" size="md">
          University of Sulaimani - BS in Computer Science
        </Heading>
        <Text fontSize="md">Oct 2017 - May 2021, Sulaymaniyah</Text>
      </Flex>
      <Text fontSize="md">Classes</Text>
      <Stack direction={"row"} mt={2} gridRowGap={2} wrap="wrap">
        {uosSubjects.map((subject, index) => (
          <Badge key={index} variant="solid" colorScheme="teal">
            {subject.subject}
          </Badge>
        ))}
      </Stack>

      {/* 2 */}
      <Flex mt={10} mb={5} justifyContent={"space-between"}>
        <Heading as="h2" size="md">
          American Private Center - Diploma in English
        </Heading>
        <Text fontSize="md">Feb 2015 – May 2017, Sulaymaniyah</Text>
      </Flex>
      <Text fontSize="md">Classes</Text>
      <Stack direction={"row"} mt={2} gridRowGap={2} wrap="wrap">
        {englishSubjects.map((subject, index) => (
          <Badge key={index} variant="solid" colorScheme="orange">
            {subject.subject}
          </Badge>
        ))}
      </Stack>
    </SlideFade>
  );
};

export default Education;
