import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import './index.css';
import App from './App';
import PokemonDetails from "./components/PokemonDetails";

const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
          <Route path="/react-pokedex" element={<App func={pull_data} />} />
          <Route path="/react-pokedex/:pokemonId" element={<PokemonDetails />} />
      </Routes>
  </Router>
);


