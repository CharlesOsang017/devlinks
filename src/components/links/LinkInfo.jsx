import {HiBars2} from 'react-icons/hi2'
import { Flex, Text, Icon, HStack, Stack, Box } from '@chakra-ui/react'

const LinkInfo = () => (
    <HStack spacing={{base:'10rem', sm: '17rem'}} justify='center' mt='20px' >
        <Flex align='center' justify='center'>
            <Icon as={HiBars2} />
            <Text>Link #1</Text>
        </Flex>
        <Flex>
            <Text>Remove</Text>
        </Flex>
    </HStack>
)

export default LinkInfo