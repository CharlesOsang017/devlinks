import { Flex, Icon, Text, Button } from '@chakra-ui/react'
import {VscLink} from 'react-icons/vsc'
import {AiOutlineEye} from 'react-icons/ai'
import NavProfile from './NavProfile'
import { useState } from 'react'


export const Navbar = () => {
  const [selected, setSelected] = useState('second')
  return (
    <Flex
    bg='white'
    borderRadius='5px'
    height='44px'
    padding='24px 25px'
    justify='space-between'
  >
    <Flex
      align='center'
      width={{ base: "40px", md: "auto" }}
      mr={{ base: 0, md: 2 }}
      cursor='pointer'
      onClick={() => {}}
    >
      <Flex align='center' bgColor='white'>
      <Icon  as={VscLink} bgColor='#5D3FD3' fontWeight={300} fontSize={25} color='white' p='4px 3px' borderRadius={5}/>
      <Text ml={2} bgColor='white' display={{base: 'none', lg: 'flex'}} fontWeight={800} fontSize='18px'>devlinks</Text>
      </Flex>    
    </Flex>
    <Flex>
      <NavProfile />  
      </Flex>
      <Icon  color='#5D3FD3' fontWeight={300} fontSize='40px' border='1px solid' bgColor='white' p='5px 5px' borderRadius='5px' mt='-20px' align='center' as={AiOutlineEye} display={{base: 'block', sm: 'none'}}/>
     <Button mt='-20px' variant='outline' display={{base: 'none', sm: 'block'}}>Preview</Button>     
    </Flex>
  )
}
