import React from 'react'
import { Stack, Image, Heading, Container, Button } from '@chakra-ui/react'

const CharacterFavorites = ({ favorite, setFavorite }) => {

  const deleteCharacter = id => {
    const characterDelete = favorite.filter( item => item.characterId !== id);
    setFavorite(characterDelete);
  }
  
  return (
    <>
      { favorite.length > 0 ? 
      
      favorite.map( item => (
        <Stack direction='column' aling='center' p={6} key={item.characterId}>
          <Container maxW='80%'>
            <Stack direction='row' justify='space-between' align='center' backgroundColor='gray.700' p={4}>
              <Image src={item.characterImg} alt={item.characterName} h='155px' />
              <Heading as='h4'>{item.characterName}</Heading>
              <Button backgroundColor='red.600' _hover={{backgroundColor: 'red.500'}} onClick={ () => deleteCharacter(item.characterId)}>Eliminar</Button>
            </Stack>
          </Container>
        </Stack>
      )) : 
        <Heading as='h4' textAlign='center'>No agregaste favoritos</Heading>
      }
    </>
  )
}

export default CharacterFavorites