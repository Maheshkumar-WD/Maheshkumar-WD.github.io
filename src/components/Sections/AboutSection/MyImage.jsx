import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Styles from "./AboutSection.module.css";
function MyImage() {
  return (
    <Box className={Styles.myImageDiv}>
     <Image className={Styles.myImage} src='https://user-images.githubusercontent.com/89634533/192496695-1d2824d8-1995-45e9-abc8-d4e119409e61.png'/>
    </Box>
  )
}

export default MyImage