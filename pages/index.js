import {
  Container,
  Box,
  Image,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Section from "@/components/section";

const MotionImage = motion(Image);

const Page = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center"></Box>
      <Section delay={0.1}>
        <Heading as="h1" variant="page-title">
          Umut Mete
        </Heading>
        <p>Software Engineer</p>
        <Heading as="h2" variant="page-title" mt={8}>
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
        <Heading as="h2" variant="page-title" mt={8}>
          Skills
        </Heading>
        <Heading as="h3" variant="section-title">
          Back-End
        </Heading>
        <UnorderedList>
          <ListItem>Microservices</ListItem>
          <ListItem>Rest APIs</ListItem>
          <ListItem>.NET 6+</ListItem>
          <ListItem>SignalR</ListItem>
          <ListItem>Entity framework / LINQ</ListItem>
          <ListItem>.NET Identity</ListItem>
        </UnorderedList>
        <Heading as="h3" variant="section-title">
          Front-End
        </Heading>
        <UnorderedList>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>Javascript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Next.js</ListItem>
        </UnorderedList>
      </Section>
    </Container>
  );
};

export default Page;
