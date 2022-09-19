import { Flex } from "@chakra-ui/react";
import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import styles from "./Banner.module.css";
import sectionStyles from "./../Section.module.css"

function BannerSection() {

  return (
    <Flex  className={styles.bannerSection+" " +sectionStyles.section} gap="12px" justifyContent={"space-evenly"} alignItems="center">
      <LeftBanner />
      <RightBanner />
    </Flex>
  );
}

export default BannerSection;
