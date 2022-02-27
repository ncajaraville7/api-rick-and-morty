import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import CharacterList from './components/CharacterList'
import CharacterFavorites from './components/CharacterFavorites'

const App = () => {

  const [ favorite, setFavorite ] = useState([]);

  useEffect( () => {
    const getLocalStorage = () => {
      const getFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorite(getFavorites)
    }
    getLocalStorage();
  }, [])

  useEffect( () => {
    localStorage.setItem('favorites', JSON.stringify(favorite))
  }, [favorite])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<CharacterList favorite={favorite} setFavorite={setFavorite} />} />
        <Route path='/favorites' element={<CharacterFavorites favorite={favorite} setFavorite={setFavorite} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
