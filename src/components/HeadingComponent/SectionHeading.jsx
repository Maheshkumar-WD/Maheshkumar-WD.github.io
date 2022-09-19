import { Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./SectionHeading.module.css";
function SectionHeading({ title }) {
  return (
    <Heading className={styles.Heading} size={"34px"}>
      {title}
    </Heading>
  );
}

export default SectionHeading;
