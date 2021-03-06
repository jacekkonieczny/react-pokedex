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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/react-pokedex">
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:pokemonId" element={<PokemonDetails />} />
      </Routes>
  </Router>
);


