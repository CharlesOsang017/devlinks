import { Flex, Text, Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const Links = () => {
  return (
    <Flex bgColor='white'  align='center' mt={10} justify='center' direction='column'>
        <Flex fontSize={{base: '20px', sm: '25px'}} fontWeight={700}>Customize your links</Flex>
        <Text fontSize={{base: '13px', sm: '15px'}}>Add/edit/remove links below and share all your profiles with the world!</Text>
        <Button variant='outline' mt='30px' width={{base:'350px', sm:'450px'}}><Icon as={AiOutlinePlus}/>{" "} Add new link</Button>
    </Flex>
  )
}

export default Links