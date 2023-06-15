import { HamburgerIcon } from "@chakra-ui/icons";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-scroll";
import resume from "../../utils/Golla_Mahesh_Kumar_Resume.pdf";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NavLogo from "./NavLogo";
import styles from "./Navbar.module.css";
import { useEffect } from "react";
function NavLinks() {
  const [size] = React.useState("full");
  let [width, setWidth] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleClick = () => {
    onOpen();
  };

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return width > 768 ? (
    <Box display={"flex"} alignItems="center" gap={"24px"}>
      <Link className={styles.navLink} to="bannerSection">Home</Link>
      <Link className={styles.navLink} to="about">
        About
      </Link>
      <Link className={styles.navLink} to="skills">
        Skills
      </Link>
      <Link className={styles.navLink} to="projects">
        Projects
      </Link>
      <Link className={styles.navLink} to="contact">
        Contact Me
      </Link>
      <a
        href="utils/Golla_Mahesh_Kumar_Resume.pdf"
        download
      >
        <Button size={"sm"} rightIcon={<DownloadIcon />}>
          Download CV
        </Button>
      </a>
    </Box>
  ) : (
    <>
      <Button onClick={() => handleClick(size)} size={"sm"} key={size} m={4}>
        {<HamburgerIcon />}
      </Button>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent className={styles.menu__overlay}>
          <DrawerCloseButton />
          <DrawerHeader>
            <NavLogo className={styles.DrawerNav} />
          </DrawerHeader>
          <hr />
          <DrawerBody>
            <Box textAlign={"center"}>
            <Box>
                <Link
                  className={styles.drawer__link}
                  to="bannerSection"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <Heading size={"md"}>Home</Heading>
                </Link>
              </Box>
              <Box>
                <Link
                  className={styles.drawer__link}
                  to="about"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <Heading size={"md"}>About</Heading>
                </Link>
              </Box>
              <Box>
                <Link
                  to="projects"
                  onClick={() => {
                    onClose();
                  }}
                  className={styles.drawer__link}
                >
                  {" "}
                  <Heading size={"md"}>Projects</Heading>{" "}
                </Link>
              </Box>
              <Box>
                <Link
                  to="skills"
                  onClick={() => {
                    onClose();
                  }}
                  className={styles.drawer__link}
                >
                  <Heading size={"md"}>Skills</Heading>
                </Link>
              </Box>
              <Box>
                <Link
                  to="contact"
                  onClick={() => {
                    onClose();
                  }}
                  className={styles.drawer__link}
                >
                  <Heading size={"md"}>Contact</Heading>
                </Link>
              </Box>
              <Box>
                <a
                  href="utils/Golla_Mahesh_Kumar_Resume.pdf"
                  download
                  onClick={() => onClose()}
                >
                  <Button
                    
                    className={styles.DrawerdownloadBtn}
                    onClick={()=>{window.open(resume)}}
                    rightIcon={<DownloadIcon />}
                  >
                    DOWNLOAD CV
                  </Button>
                </a>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavLinks;
