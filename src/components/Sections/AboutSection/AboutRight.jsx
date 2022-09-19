import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./AboutSection.module.css";
function AboutRight() {
  return (
    <>
      <Box className={Styles.AboutBox}>
        <Box>
          <Heading>Professional Summary</Heading>
          <q className={Styles.AboutText}>
            Strong in design and integration with intuitive problem-solving
            skills. Passionate about implementing and launching new projects.
            Looking to start the career as an entry-level software engineer with
            a reputed firm driven by technology.
          </q>
        </Box>
        <Box marginTop={"24px"}>
          <Heading>Trained In</Heading>
          <Text className={Styles.AboutText}>
            Trained as a Full-stack Web developer 30 Weeks in Masai School
          </Text>
        </Box>
        <Box marginTop={"24px"}>
          <Heading>Certified In</Heading>
          <Text className={Styles.AboutText}>
            Certified as a Web Designer from HRDS
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default AboutRight;
