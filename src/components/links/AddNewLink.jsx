import { Flex, Text, Icon, HStack, Stack, Box } from '@chakra-ui/react'

import React from 'react'
import LinkInput from './LinkInput'
import LinkInfo from './LinkInfo'

const AddNewLink = () => (
    <Box align='center' justify='center'>    
   <LinkInfo />
    <Stack  bgColor='#DCDCDC' width='425px'>
        <LinkInput />
    </Stack>
    </Box>
)

export default AddNewLink