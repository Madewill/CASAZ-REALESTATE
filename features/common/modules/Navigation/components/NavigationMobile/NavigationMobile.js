import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from "react-icons/hi2";
import { navigationLinks } from "../../navigationConsts";
import { FiMenu } from "react-icons/fi";

const NavigationMobile = () => {
  return (
    <Box
      color="blue.600"
      padding="2rem"
      backgroundColor="white"
      display={{ base: "block", md: "none" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                CASAZ
              </Text>
            </Box>
          </Link>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FiMenu style={{ strokeWidth: 3 }} />}
              variant="outline"
              color="blue.600"
            />
            <MenuList>
              {navigationLinks.map((item) => (
                <NavigationLink key={item.title} {...item} />
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};
