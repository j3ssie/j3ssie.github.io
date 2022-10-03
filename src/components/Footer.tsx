import {
  Flex,
  Container,
  SimpleGrid,
  Link,
  Text,
  Icon,
  Stack,
  Box,
} from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle";
import { Heading, Button } from "@chakra-ui/react";

import { CheckCircleIcon, SearchIcon } from "@chakra-ui/icons";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaGem,
  FaQuestionCircle,
  FaPatreon,
  FaPaypal,
  FaMoneyBillAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container
      maxWidth={1200}
      margin="0 auto"
      centerContent
      marginBlock={"1rem"}
    >
      <Box marginBottom="2rem">
        <Heading
          fontSize={['4xl', '4xl']}
          bgGradient="linear(to-l, #8BC6EC, #9599E2)"
          bgClip="text"
        >
          {`Supporting me`}
        </Heading>
      </Box>
      <Box marginBottom="2rem">
        <Text fontSize={"2xl"} color={"gray.500"}>
        If you love my tools and want to support my work, please see the donation options below.
        </Text>
      </Box>

      <SimpleGrid alignItems={"center"} columns={[1, 3]} spacing={[2, null]}>
          <Link
            href="https://www.patreon.com/j3ssie"
            isExternal
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            <Button
              colorScheme="red"
              size="lg"
              flex={1}
              fontSize={"xl"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              leftIcon={<FaPatreon />}
            >
              Patreon
            </Button>
          </Link>

          <Link
            href="https://www.paypal.com/paypalme/j3ssiejjj"
            isExternal
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            <Button
              colorScheme="twitter"
              size="lg"
              flex={1}
              fontSize={"xl"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              leftIcon={<FaPaypal />}
            >
              Paypal
            </Button>
          </Link>

          <Link
            href="https://docs.osmedeus.org/donation/"
            isExternal
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            <Button
              colorScheme="yellow"
              size="lg"
              flex={1}
              fontSize={"xl"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              leftIcon={<FaMoneyBillAlt />}
            >
              Other Methods
            </Button>
          </Link>
        </SimpleGrid>

      <Icon
        marginBottom="2em"
        viewBox="0 0 40 35"
        mt={14}
        boxSize={10}
        color={"purple.400"}
      >
        <path
          fill={"currentColor"}
          d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
        />
      </Icon>

      <Box marginBottom="2rem">
        <Heading
          fontSize={['4xl', '4xl']}
          bgGradient="linear(to-l, #8BC6EC, #9599E2)"
          bgClip="text"
        >
          {`Contact me`}
        </Heading>
      </Box>

      <Box>
      <SimpleGrid columns={[1, 3]} spacing={[2, 2]}>
          <Link
            href="https://twitter.com/j3ssiejjj"
            isExternal
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              Twitter
            </Button>
          </Link>

          <Link
            href="https://github.com/j3ssie"
            isExternal
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            <Button colorScheme="gray" leftIcon={<FaGithub />}>
              Github
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/ai-ho/"
            isExternal
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              Linkedin
            </Button>
          </Link>
        </SimpleGrid>
      </Box>

      <Box marginTop="0.5rem" marginBottom="0.5rem">
        <Text fontSize="sl" color="gray.500">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://twitter.com/j3ssiejjj"
            isExternal
            rel="noopener noreferrer"
          >
            j3ssie
          </Link>
        </Text>
      </Box>
      <ThemeToggle />
    </Container>
  );
};

export default Footer;
