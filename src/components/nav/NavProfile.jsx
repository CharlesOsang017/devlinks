import React from 'react'
import {Flex, Icon, Text} from '@chakra-ui/react'
import {BiLink} from 'react-icons/bi'
import {HiOutlineUserCircle} from 'react-icons/hi'
const NavProfile = () => {
  return (
    <Flex align='center'>
        <Flex align='center' justify='center' cursor='pointer' mr={8}  p='4px 8px' bgColor='#CBC3E3' borderRadius='5px'>
            <Icon  as={BiLink} bgColor='#CBC3E3' color='#5D3FD3'  fontSize='30px'/>
            <Text display={{base: 'none', md: 'flex'}} p='0px 10px' bgColor='#CBC3E3' color='#5D3FD3'>Links</Text>
        </Flex>
        <Flex align='center' bgColor="white" cursor='pointer'>
        <Icon  as={HiOutlineUserCircle} bgColor="white"  fontSize='30px'/>
            <Text p='0px 10px' display={{base: 'none', md: 'flex'}} bgColor="white">Profile Details</Text>
        </Flex>
    </Flex>
  )
}

export default NavProfile