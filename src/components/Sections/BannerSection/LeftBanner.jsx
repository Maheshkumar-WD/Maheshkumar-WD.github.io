import { DownloadIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Banner.module.css";
// import * from "../../../../public/utils/Golla_Mahesh_kumar.pdf"
function LeftBanner() {
  return (
    <Flex
      className={styles.leftBanner}
      flexDirection="column"
      alignItems="flex-start"
      justifyContent={"center"}
    >
      <Heading className={styles.heading}>Hello,</Heading>
      <Heading className={styles.nameHeading}>
        I'm <span className={styles.name}>Golla Mahesh Kumar</span>
      </Heading>
      <Text className={styles.role}>and I'm Web Developer</Text>
      <a href="utils/Golla_Mahesh_Kumar_Resume.pdf" download>
        <Button className={styles.downloadBtn} rightIcon={<DownloadIcon />}>
          DOWNLOAD CV
        </Button>
      </a>
    </Flex>
  );
}

export default LeftBanner;
