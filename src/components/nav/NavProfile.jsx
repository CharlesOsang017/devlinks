import React, { useState } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiLink } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import Link from "next/link";

const NavProfile = () => {
  const NavDetail = [
    {
      title: "Links",
    },
    {
      title: "Profile Details",
    },
  ];
  const [selected, setSelected] = useState(NavDetail[1].title);
  console.log(selected);

  return (
    <Flex align='center'>
      <Flex
        align='center'
        justify='center'
        cursor='pointer'
        mr={8}
        p='4px 8px'
        bgColor='#CBC3E3'
        borderRadius='5px'
      >
        <Icon as={BiLink} bgColor='#CBC3E3' color='#5D3FD3' fontSize='30px' />
        <Text
          display={{ base: "none", md: "flex" }}
          p='0px 10px'
          bgColor='#CBC3E3'
          color='#5D3FD3'
        >
          Links
        </Text>
      </Flex>
      <Link href='/ProfileDetails'>
      <Flex align='center' bgColor='white' cursor='pointer'>
        <Icon as={HiOutlineUserCircle} bgColor='white' fontSize='30px' />
        <Text
          p='0px 10px'
          display={{ base: "none", md: "flex" }}
          bgColor='white'
        >
          Profile Details
        </Text>
      </Flex>
      </Link>
    </Flex>
  );
};

export default NavProfile;
