import React, { useEffect, useState } from 'react'
import { Stack } from '@chakra-ui/react'

import Character from './Character'
import CharacterSearch from './CharacterSearch';
import Paginador from './Paginador';

const CharacterList = ({ favorite, setFavorite }) => {

  const [ characters, setCharacters ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ page, setPage ] = useState(1);

  const getCharacter = () => {
    const CHARACTER_API = 'https://rickandmortyapi.com/api/character/?page=' + page;
    
    fetch(CHARACTER_API)
      .then( res => res.json())
      .then( data => setCharacters(data.results))
  }

  useEffect( () => {
    getCharacter();
  }, [page])

  return (
    <>
      <CharacterSearch getCharacter={getCharacter} setCharacters={setCharacters} search={search} setSearch={setSearch} />
  
      <Stack direction='row' wrap='wrap' justify='center' aling='center' gap={8} p={8}>
        { characters.map( item => <Character key={item.id} {...item} favorite={favorite} setFavorite={setFavorite} />) }
      </Stack>

      <Paginador page={page} setPage={setPage} search={search}/>
    </>
  )
}

export default CharacterList