import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SectionHeading from '../../HeadingComponent/SectionHeading'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import styles from "./AboutSection.module.css"
import secStyle from "../Section.module.css"
function AboutSection() {
  return (
    <Box id='about' className={styles.Aboutsection+" "+secStyle.section}>
          <SectionHeading title={"About"} />
          <Flex className={styles.AboutContentContainer} marginTop={"54px"}>
            <AboutLeft />
            <AboutRight />
          </Flex>
    </Box>
  )
}

export default AboutSection