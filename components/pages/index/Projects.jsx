import { Heading, SlideFade, Box, HStack, Grid } from "@chakra-ui/react";
import ProjectCard from "components/ProjectCard";
import React from "react";

const Projects = () => {
  const projects = [
    {
      url: "https://github.com/BisarOmer/SlawPharmacy",
      title: "Slaw Pharmacy",
      description: "A desktop application for pharmacy database management.",
      tags: [
        { name: "React", color: "blue" },
        { name: "Electronjs", color: "gray" },
        { name: "MySQL", color: "orange" },
      ],
    },
    {
      url: "https://github.com/BisarOmer/SlawPet",
      title: "Slaw Pet",
      description: "A mobile application for adopting pet, finding a place for unsheltered animals.",
      tags: [{ name: "React", color: "blue" }],
    },
    {
      url: "https://bakhi-dabashan-front.vercel.app/",
      title: "Dabashan Real Estate",
      description: "UI&UX mobile application design for Baxy Dabashan which is a real estate company, implementing the web in Reactjs (Nextjs).",
      tags: [
        { name: "Nextjs", color: "gray" },
        { name: "AdobeXD", color: "pink" },
      ],
    },
    {
      url: "https://dribbble.com/shots/16246956-Electron",
      title: "Electron",
      description: "Electron is a mobile app for e-commerce electronic devices",
      tags: [{ name: "AdobeXD", color: "pink" }],
    },
    {
      url: "https://github.com/BisarOmer/LanguagePack/tree/Kurdish",
      title: "AnySoftKeyboard",
      description: "Adding kurdish fro AnySoftKeyboard.",
      tags: [{ name: "Open Source", color: "gray" }],
    },
  ];
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading as="h1" fontSize={{ base: "24px", md: "30px", lg: "36px" }} mb={3}>
        Projects
      </Heading>
      <Grid mt={10} templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={5}>
        {projects?.map((item, index) => (
          <ProjectCard project={item} key={index} />
        ))}
      </Grid>
    </SlideFade>
  );
};

export default Projects;
