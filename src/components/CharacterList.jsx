import React, { useEffect, useState } from 'react'
import { Stack, Spinner } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component';

import Character from './Character'
import CharacterSearch from './CharacterSearch';

const CharacterList = ({ favorite, setFavorite }) => {

  const [ characters, setCharacters ] = useState([]);
  const [ page, setPage ] = useState(1);

  const getCharacter = () => {
    const CHARACTER_API = 'https://rickandmortyapi.com/api/character/?page=' + page;
    
    fetch(CHARACTER_API)
      .then( res => res.json())
      .then( data => setCharacters((prevCharacter) => prevCharacter.concat(data.results)))
  }

  useEffect( () => {
    getCharacter();
  }, [page])

  return (
    <>
      <CharacterSearch getCharacter={getCharacter} setCharacters={setCharacters} />
  
      <InfiniteScroll dataLength={characters.length} hasMore={true} next={ () => setPage( (prevPage) => prevPage + 1)}>
        <Stack direction='row' wrap='wrap' justify='center' aling='center' gap={8} p={8}>
          { characters.map( item => <Character key={item.id} {...item} favorite={favorite} setFavorite={setFavorite} />) }
        </Stack>
      </InfiniteScroll>
    </>
  )
}

export default CharacterList