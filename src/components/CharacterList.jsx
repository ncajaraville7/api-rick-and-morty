import React, { useEffect, useState } from 'react'
import { Stack } from '@chakra-ui/react'

import Character from './Character'
import CharacterSearch from './CharacterSearch';

const CharacterList = ({ favorite, setFavorite }) => {

  const [ characters, setCharacters ] = useState([]);

  const getCharacter = () => {
    const CHARACTER_API = 'https://rickandmortyapi.com/api/character';

    fetch(CHARACTER_API)
      .then( res => res.json())
      .then( data => setCharacters(data.results))
  }

  useEffect( () => {
    getCharacter();
  }, [])

  return (
    <>
      <CharacterSearch getCharacter={getCharacter} setCharacters={setCharacters} />

      <Stack direction='row' wrap='wrap' justify='center' aling='center' gap={8} p={8}>
        { characters.map( item => <Character key={item.id} {...item} favorite={favorite} setFavorite={setFavorite} />) }
      </Stack>
    </>
  )
}

export default CharacterList