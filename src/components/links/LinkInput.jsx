import {
  Flex,
  Menu,
  Icon,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { TbBrandGithub } from "react-icons/tb";
import { useState } from "react";
import PlatForms from "./MenuList";
import LinkField from "./LinkField";

const LinkInput = () => {
  const [selectedPlatForm, setselectedPlatForm] = useState(
    "Choose your platform"
  );
  const dropMenu = [
    {
      icon: AiOutlineYoutube,
      title: "Youtube",
    },
    {
      icon: TbBrandGithub,
      title: "Github",
    },
    {
      icon: IoLogoLinkedin,
      title: "LinkedIn",
    },
  ];
  
  return (
    <Flex bgColor='white' direction='column'>
      <Text align='start' mt='10px' ml={{ base: "20px", sm: "0px" }}>
        Platform
      </Text>
      <Menu>
        <MenuButton
          variant='none'
          as={Button}
          rightIcon={<ChevronDownIcon />}
          ml={{ base: "20px", sm: "0px" }}
          width={{ base: "90%", sm: "100%" }}
          borderRadius={5}
          border='1px solid #D3D3D3'
          height='40px'
        >
          {selectedPlatForm}
        </MenuButton>
        <MenuList>
          {/* // menuList component */}
          {dropMenu.map((item) => {
            
            return (
              <>
                <MenuItem
                  minH='48px'
                  key={item.title}
                  onClick={() => setselectedPlatForm(item.title)}
                >
                  <Icon
                    boxSize='2rem'
                    borderRadius='full'
                    as={item.icon}
                    alt='platform icon'
                    mr='12px'
                    background='cover'
                  />
                  <span>{item.title}</span>
                </MenuItem>
              </>
            );
          })}
        </MenuList>
      </Menu>
      <LinkField />
    </Flex>
  );
};

export default LinkInput;
