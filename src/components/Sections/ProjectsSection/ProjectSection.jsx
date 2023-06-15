import { Box } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../../HeadingComponent/SectionHeading";
import styles from "../Section.module.css";
import projectStyles from "./project.module.css";
import ProjectCard from "./ProjectCard";
import {data as projects} from "./projectsData";
function ProjectSection() {
  return (
    <div id="projects" className={styles.section +" "+ projectStyles.projectSection }>
      <SectionHeading title="Projects" />
      <Box className={projectStyles.projectsContainer}>
        {
          projects?.map((project)=>{
               return <ProjectCard  key={project.id} projectStyles={projectStyles} project={project} />
          })
        }
      </Box>
    </div>
  );
}

export default ProjectSection;
