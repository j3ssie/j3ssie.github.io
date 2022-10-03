import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  Link,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaGem,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Intro = () => {
  return (
    <Container maxW={"4xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 15 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 8 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Hi, my name is
            </Text>
            <br />
            <Text as={"span"} color={"green.300"}>
              Ai Ho
            </Text>
          </Heading>
          <Text fontSize={"2xl"} color={"gray.500"}>
            and on the Internet I'm known as{" "}
            <Text as={"span"} color={"green.300"}>
              j3ssie
            </Text>
            . I'm currently a senior security engineer for an e-commerce company and the creator of a few popular projects.
          </Text>
          <Stack
            align="center"
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link
              href="https://github.com/j3ssie"
              isExternal
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"blue"}
                bg={"blue.300"}
                _hover={{ bg: "blue.500" }}
                leftIcon={<FaGithub color={"gray.300"} />}
              >
                My Github
              </Button>
            </Link>

            <Link
              href="mailto:j3ssiejjj@gmail.com"
              isExternal
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
            >
              <Button
                colorScheme={"red"}
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                leftIcon={<MdEmail color={"gray.300"} />}
              >
                Contact me
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/static/j3ssie.png"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Intro;
