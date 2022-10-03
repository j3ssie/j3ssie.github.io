import {
  Button,
  Heading,
  Box,
  Image,
  Text,
  Link,
  Stack,
  Container,
} from "@chakra-ui/react";
import { SiHackerone, SiBugcrowd } from "react-icons/si";

const Hero = () => {
  return (
    <Container maxWidth={"70%"} margin="2rem" centerContent>
      <Box marginBottom="0.5rem">
        <Heading
          fontSize={['4xl', '4xl']}
          bgGradient="linear(to-l, #8BC6EC, #9599E2)"
          bgClip="text"
        >
          Acknowledged by
        </Heading>
      </Box>

      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 15 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box marginBottom="2rem">
          <Text fontSize={"2xl"} color={"gray.500"}>
            Google, Apple, Microsoft, Netflix, Yahoo, StackOverflow, DoD,
            Alibaba, Grab, Snapchat, Starbucks, Tencent, Firefox, Django, Red
            Hat, FireEye, F-Secure, SAP, Hyatt, ATT, Mastercard, and so on for
            finding security issues on their products.
          </Text>
        </Box>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Link
          href={`https://hackerone.com/j3ssie`}
          isExternal
          style={{ textDecoration: "none" }}
          rel="noopener noreferrer"
        >
          <Button
            // bg={"gray.400"}
            colorScheme={'gray'}
            size="lg"
            flex={1}
            fontSize={"xl"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
            leftIcon={<SiHackerone />}
          >
            Hackerone
          </Button>
        </Link>

        <Link
          href={`https://bugcrowd.com/j3ssie`}
          isExternal
          style={{ textDecoration: "none" }}
          rel="noopener noreferrer"
        >
          <Button
           colorScheme={'orange'}
            size="lg"
            flex={1}
            fontSize={"xl"}
            rounded={"full"}
            _focus={{
              bg: "orange.200",
            }}
            leftIcon={<SiBugcrowd />}
          >
            Bugcrowd
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};
export default Hero;
