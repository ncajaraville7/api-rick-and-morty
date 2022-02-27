import React from 'react'
import { Box, Stack, Image, Text, Button, Icon } from '@chakra-ui/react'
import { FaHeart } from "react-icons/fa";

const Character = ({ id, image, name, favorite, setFavorite }) => {

  const characterFind = favorite.find( item => item.characterId === id)

  const handleClick = () => {

    const characterObj = {
      characterId: id,
      characterImg: image,
      characterName: name,
    }
      if(!characterFind) {
        setFavorite([...favorite, characterObj])
        return;
      } 
  }

  return (
    <Stack w='295px'>
      <Box>
        <Image src={image} alt={name} />
      </Box>
      <Stack direction='row' justify='space-between' align='center' backgroundColor='gray.800' m='0 !important' p={3}>
        <Text>{name}</Text>
        { !characterFind ? <Button backgroundColor='gray.700' _hover={{backgroundColor: 'gray.600'}} onClick={ handleClick }>ADD +</Button> : <Icon as={FaHeart} backgroundColor='gray.700' w={8} h={8} p={2} rounded={4} />}
      </Stack>
    </Stack>
  )
}

export default Character