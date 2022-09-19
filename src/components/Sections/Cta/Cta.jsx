import { Box } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../../HeadingComponent/SectionHeading";
import sectionStyles from "../Section.module.css";
import styles from "./Cta.module.css"
import CtaRight from "./CtaRight";
function Cta() {
  return (
    <Box id="contact" className={sectionStyles.section}>
      <SectionHeading title="Contact Me" />
      <Box className={styles.ctaBox}>
        <CtaRight />
      </Box>
    </Box>
  );
}

export default Cta;
