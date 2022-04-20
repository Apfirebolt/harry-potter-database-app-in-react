import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeScreen from './screens/Home'
import CharacterScreen from './screens/Characters'
import HouseScreen from './screens/Houses'
import SpellScreen from './screens/Spells'
import IngredientScreen from './screens/Ingredients'
import ElixirScreen from './screens/Elixirs'

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/characters' element={<CharacterScreen />} />
            <Route path='/houses' element={<HouseScreen />} />
            <Route path='/elixirs' element={<ElixirScreen />} />
            <Route path='/spells' element={<SpellScreen />} />
            <Route path='/ingredients' element={<IngredientScreen />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
