import { Container, Box, Image, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const Page = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center">
        <MotionImage
          boxSize="400px"
          src="/images/umut.jpg"
          alt="umut mete"
          objectFit="contain"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        m={10}
        borderTop="3px solid white"
      >
        <Heading as="h1" variant="page-title">
          Umut Mete
        </Heading>
        <p>Software Engineer</p>
        <Heading
          as="h2"
          variant="page-title"
          mt={8}
          borderBottom="3px solid white"
        >
          About
        </Heading>
        <p>
          As a dedicated software engineer, I am passionate about web
          application development but I believe a software engineer should be
          able to develop any kind of software. Specializing in back-end
          development, I also possess the skills and experience necessary for
          front-end development. I take pride in writing clean, efficient and
          maintainable code. When not developing anything I usually spend my
          time working out or socializing, I am a very extraverted person I like
          meeting new people and spending time with the people I love.
        </p>
        <Heading
          as="h2"
          variant="page-title"
          mt={8}
          borderBottom="3px solid white"
        >
          Skills
        </Heading>
      </Box>
    </Container>
  );
};

export default Page;
