import { Container, Box } from "@chakra-ui/react";
import {
  Link as ChakraLink,
  Text,
  Stack,
  Image,
  Heading,
  Icon,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react"; // get the React object from the react module
import { CopyBlock, dracula } from "react-code-blocks";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import GitHubButton from "react-github-btn";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

import {
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaGem,
  FaLink,
  FaFireAlt,
} from "react-icons/fa";
export const ProjectCard = (props: any) => {
  const imageSre = props.image;
  const title = props.title;
  const desc = props.desc;
  const repo = props.repo;
  const defaultStar = props.defaultStar;
  // https://api.github.com/repos/j3ssie/osmedeus
  // stargazers_count
  const metadataURL = `https://api.github.com/repos/${repo}`;
  const [stars, setStar] = useState(defaultStar);

  return (
    <Box
      role={"group"}
      p={6}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${imageSre})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={imageSre}
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          {title}
        </Heading>

        <Text color={"gray.500"} fontSize={"sm"}>
          {desc}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Link
            href={`https://github.com/${repo}`}
            isExternal
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            <Button
              flex={1}
              fontSize={"md"}
              rounded={"full"}
              bg={"green.300"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "green.200",
              }}
              _focus={{
                bg: "green.200",
              }}
              leftIcon={<FaGithub color={"gray.300"} />}
            >
              Github
            </Button>
          </Link>

          <Link
            href={`https://github.com/${repo}/stargazers`}
            isExternal
            style={{ textDecoration: "none" }}
            rel="noopener noreferrer"
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              leftIcon={<FaStar color={"gray.300"} />}
            >
              {stars}
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

const Main = () => {
  return (
    <Container maxWidth={"70%"} margin="2rem" centerContent>
      <Box marginBottom="2rem">
        <Heading
          fontSize={['4xl', '4xl']}
          bgGradient="linear(to-l, #8BC6EC, #9599E2)"
          bgClip="text"
        >
          {`Projects`}
        </Heading>
      </Box>

      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 15 }}
        direction={{ base: "column", md: "row" }}
      >
        <ProjectCard
          title="Jaeles"
          desc="The Swiss Army knife for automated Web Application Testing"
          image="/static/jaeles.png"
          repo="jaeles-project/jaeles"
          defaultStar="1k6+"
        />

        <ProjectCard
          title="Osmedeus"
          desc="A Workflow Engine for Offensive Security"
          image="/static/osmedeus.png"
          repo="j3ssie/osmedeus"
          defaultStar="4k+"
        />
        <ProjectCard
          title="Metabigor"
          desc="The Intelligence tool but without API key"
          image="/static/metabigor.png"
          repo="j3ssie/metabigor"
          defaultStar="700+"
        />
      </Stack>
    </Container>
  );
};

export default Main;
