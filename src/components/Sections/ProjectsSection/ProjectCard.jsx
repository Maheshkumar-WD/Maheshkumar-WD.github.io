import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
// import image from "./projectImages.guess-the-number.jpg"

function ProjectCard({ projectStyles, project }) {
  return (
    <Box
      data-aos={`zoom-in-right`}
      // data-aos-offset="6"
      data-aos-duration="700"
      className={projectStyles.projectCard}
    >
      <Box>
        <Image
          className={projectStyles.projectImage}
          src={project.images}
          alt={project.title}
        />
      </Box>
      {/* ----------- */}
      <Box className={projectStyles.projectContent}>
        <Box>
          <Heading className={projectStyles.projectTitle}>
            {project.title}
          </Heading>
          <Text>{project.desc}</Text>
          <Box>
            <Heading size={"md"}>Tech Stacks used:</Heading>
            <Box className={projectStyles.techStacksContainer}>
              {project.techStacks.map((stack) => {
                return (
                  <Image
                    key={stack}
                    className={projectStyles.techStack}
                    src={stack}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
        <Flex className={projectStyles.buttonContainer}>
          <Link target="_blank" href={project.github}>
            <Button
              className={projectStyles.ActionBtn}
              colorScheme="whiteAlpha"
            >
              Git Hub
            </Button>
          </Link>
          <Link href={project.live} target="_blank">
            <Button className={projectStyles.ActionBtn} colorScheme="facebook">
              Live
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProjectCard;
