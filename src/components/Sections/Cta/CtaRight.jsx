import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Cta.module.css";
function CtaRight() {
  return (
    <Box className={styles.ctaBoxContent}>
      <Text className={styles.ctaSubHeading}>Want to get in touch?</Text>
      <Text className={styles.ctaSubHeading}>
        You can reach out to me Through
      </Text>

      <Box className={styles.ctaFormContainer}>
        <form className={styles.contactForm}>
          <Heading textAlign={"center"} marginBottom="12px" color={"white"}>
            {" "}
            Get In Touch{" "}
          </Heading>
          <Box>
            <Input
              className={styles.formInput}
              type="text"
              placeholder="Name"
            />
          </Box>
          <Box>
            <Input
              className={styles.formInput}
              type="email"
              placeholder="Email"
            />
          </Box>
          <Box>
            <Textarea className={styles.formInput} placeholder="Message" />
          </Box>
          <Box className={styles.formBtnContainer}>
            <Button className={styles.formBtn}>Send</Button>
          </Box>
        </form>
      </Box>
      <Heading className={styles.orHeading}>OR</Heading>
      <Flex className={styles.contactLinks}>
        <Flex alignItems="center" gap={"10px"}>
          <EmailIcon />
          <Link href="mailto:maheshkumar.fsd@gmail.com">
            maheshkumar.fsd@gmail.com
          </Link>
        </Flex>
        <Flex alignItems="center" gap={"10px"}>
          <PhoneIcon />
          <Link href="tel:9381675330">+91 9381675330</Link>
        </Flex>
        <Flex alignItems="center" gap={"10px"}>
          <LinkedInIcon />{" "}
          <Link
            href="https://www.linkedin.com/in/mahesh-kumar-golla-91a5111a4/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </Flex>
        <Flex alignItems="center" gap={"10px"}>
          <GitHubIcon />{" "}
          <Link href="https://github.com/Maheshkumar-WD" target="_blank">
            Github
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CtaRight;
