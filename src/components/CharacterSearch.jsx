import React, { useEffect, useState } from 'react'
import { Container, Input, FormControl } from '@chakra-ui/react'

const CharacterSearch = ({ getCharacter, setCharacters, search, setSearch }) => {

    const getCharacterQuest = () => {
        const SEARCH_API = 'https://rickandmortyapi.com/api/character/?name=' + search;

        fetch(SEARCH_API)
            .then( res => res.json())
            .then( data => setCharacters(data.results))
    }

    useEffect( () => {
        if(search) {
            getCharacterQuest();
            return;
        } 
        getCharacter();
    }, [search])

  return (
    <Container>
        <FormControl as='form'>
            <Input type='text' id='searchCharacter' placeholder='Busca tu personaje favorito' value={search} onChange={ (e) =>  setSearch(e.target.value) } />
        </FormControl>
    </Container>
  )
}

export default CharacterSearch