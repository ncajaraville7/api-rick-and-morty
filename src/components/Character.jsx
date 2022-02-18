import React, { useState } from 'react'
import { Box, Stack, Image, Text, Button } from '@chakra-ui/react'

const Character = ({ id, image, name, favorite, setFavorite }) => {

  const [ isFavorite, setIsFavorite ] = useState(false)

  const handleClick = () => {

    const characterObj = {
      characterId: id,
      characterImg: image,
      characterName: name
    }
      setFavorite([...favorite, characterObj])
      setIsFavorite(true)
  }

  return (
    <Stack w='295px'>
      <Box>
        <Image src={image} alt={name} />
      </Box>
      <Stack direction='row' justify='space-between' align='center' backgroundColor='gray.800' m='0 !important' p={3}>
        <Text>{name}</Text>
        { !isFavorite ? <Button backgroundColor='gray.700' _hover={{backgroundColor: 'gray.600'}} onClick={ handleClick }>ADD +</Button> : ''}
      </Stack>
    </Stack>
  )
}

export default Character