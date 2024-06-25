import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="gray" p={3} align="center">
        Hello I am a software engineer based in turkey!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Umut Mete
          </Heading>
          <p>Software Engineer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
