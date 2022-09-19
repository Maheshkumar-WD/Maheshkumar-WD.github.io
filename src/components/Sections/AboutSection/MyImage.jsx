import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Styles from "./AboutSection.module.css";
function MyImage() {
  return (
    <Box className={Styles.myImageDiv}>
     <Image className={Styles.myImage} src='https://media-exp1.licdn.com/dms/image/C4D03AQG7IeuFvewSvQ/profile-displayphoto-shrink_400_400/0/1653048025867?e=1668643200&v=beta&t=rSKb8l7GRGDk4czE3VEc8gvu_oSZP8S4P_V84_Ii44U'/>
    </Box>
  )
}

export default MyImage