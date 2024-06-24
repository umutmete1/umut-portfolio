import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Links = ["Home", "Projects", "GitHub", "LinkedIn"];

const NavLink = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { path } = props;

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink href={"/"} path={path}>
                Umut Mete
              </NavLink>
              <NavLink href={"/projects"} path={path}>
                Projects
              </NavLink>
              <NavLink href={"https://github.com/umutmete1"} path={path}>
                GitHub
              </NavLink>
              <NavLink
                href={"https://www.linkedin.com/in/umut-mete-162268237/"}
                path={path}
              >
                LinkedIn
              </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink href={"/"} path={path}>
                Home
              </NavLink>
              <NavLink href={"/projects"} path={path}>
                Projects
              </NavLink>
              <NavLink href={"https://github.com/umutmete1"} path={path}>
                GitHub
              </NavLink>
              <NavLink
                href={"https://www.linkedin.com/in/umut-mete-162268237/"}
                path={path}
              >
                LinkedIn
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
