import { Flex, Text, Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const Links = () => {
  return (
    <Flex bgColor='white'  align='center' mt={10} justify='center' direction='column'>
        <Flex fontSize={25} fontWeight={700}>Customize your links</Flex>
        <Text fontSize={15}>Add/edit/remove links below and share all your profiles with the world!</Text>
        <Button variant='outline' mt='30px' width='450px'><Icon as={AiOutlinePlus}/>{" "} Add new link</Button>
    </Flex>
  )
}

export default Links