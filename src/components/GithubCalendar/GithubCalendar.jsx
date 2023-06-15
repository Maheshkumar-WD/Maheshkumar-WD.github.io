import { Box } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import SectionHeading from "../HeadingComponent/SectionHeading";
import styles from "../Sections/Section.module.css";
import style from "./GithubCalendar.module.css";

function GithubCalendar() {
  return (
    <Box className={styles.section}>
      <SectionHeading title="Github Stats" />
      <div className={` ${style.calendar}`}>
        {/* <GitHubCalendar
          style={{ margin: "auto" }}
          blockSize={18}
          username="maheshkumar-wd"
        /> */}
        <GitHubCalendar style={{ margin: "auto" }}
          blockSize={18} username="Maheshkumar-WD" year={new Date().getFullYear()}/>

        <p align="center">
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Maheshkumar-WD&theme=dark"
            alt="MAHESH KUMAR"
          />
        </p>
      </div>
    </Box>
  );
}

export default GithubCalendar;
