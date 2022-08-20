import ToolCard from "../../ToolCard";
import { Heading, SlideFade, Grid } from "@chakra-ui/react";
import { FaReact, FaJs, FaDatabase, FaGitAlt, FaBehance, FaJava, FaCode, FaNode } from "react-icons/fa";

const tools = [
  {
    name: "Javascript",
    description: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.info",
  },
  {
    name: "React.js",
    description: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
    icon: <FaReact fontSize="20px" />,
    url: "https://www.reactjs.org",
  },
  {
    name: "Golang",
    description: "Build fast, reliable, and efficient software at scale",
    icon: <FaCode fontSize="20px" />,
    url: "https://go.dev/",
  },
  {
    name: "MySQL",
    description: "MySQL is an open-source relational database management system. ",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    description: "MongoDB is a source-available cross-platform document-oriented database program.",
    icon: <FaCode fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Git",
    description: "A version control system that gives you a lot of flexibility.",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://git-scm.com/",
  },
  {
    name: "Express js",
    description: "Expressjs is a back end web application framework for Node.js.",
    icon: <FaNode fontSize="20px" />,
    url: "https://expressjs.com/",
  },
  {
    name: "Java",
    description: "Java is a high-level, class-based, object-oriented programming language.",
    icon: <FaJava fontSize="20px" />,
    url: "https://www.java.com/",
  },
  {
    name: "Adobe XD",
    description: "Adobe XD is a vector design tool for web and mobile applications.",
    icon: <FaBehance fontSize="20px" />,
    url: "https://www.adobe.com/products/xd.html",
  },
];

const Stack = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }} mb={3}>
        Stack & Skills
      </Heading>
      <Grid mt={10} templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={5}>
        {tools.map(tool => (
          <ToolCard tool={tool} key={tool?.name} />
        ))}
      </Grid>
    </SlideFade>
  );
};

export default Stack;
