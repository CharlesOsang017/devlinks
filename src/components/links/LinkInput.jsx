import {
  Flex,
  Menu,
  Image,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const LinkInput = () => {
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
          Your Cats
        </MenuButton>
        <MenuList>
          <MenuItem minH='48px'>
            <Image
              boxSize='2rem'
              borderRadius='full'
              src='https://placekitten.com/100/100'
              alt='Fluffybuns the destroyer'
              mr='12px'
            />
            <span>Fluffybuns the Destroyer</span>
          </MenuItem>
          <MenuItem minH='40px'>
            <Image
              boxSize='2rem'
              borderRadius='full'
              src='https://placekitten.com/120/120'
              alt='Simon the pensive'
              mr='12px'
            />
            <span>Simon the pensive</span>
          </MenuItem>
        </MenuList>
      </Menu>
      <Text align='start' mt='10px' ml={{ base: "20px", sm: "0px" }}>
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
    </Flex>
  );
};

export default LinkInput;
