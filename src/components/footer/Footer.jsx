import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Footer.module.css";
function Footer() {
  return (
    <Box className={Styles.footer}>
          <Text className={Styles.cpyText}>Created by Mahesh Kumar | &copy; 2022. All Rights Reserved</Text>
          <Text> </Text>
    </Box>
  )
}

export default Footer