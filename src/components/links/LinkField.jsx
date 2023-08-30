import { Input, Text, Button } from '@chakra-ui/react'
import React from 'react'

const LinkField = () => {
  return (
    <div>
    <Text align='start' ml={{ base: "20px", sm: "0px" }}>
        Link
      </Text>
      <Input
        width={{ base: "90%", sm: "100%" }}
        border='1px solid #D3D3D3'
        outline='none'
        ml={{ base: "20px", sm: "0px" }}
      />
      <Button align='center' justify='center' mt='30px' ml='300px' width='20%'>
        Save
      </Button>
    </div>
  )
}

export default LinkField