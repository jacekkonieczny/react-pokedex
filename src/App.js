import SearchPokemon from "./components/SearchPokemon";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/App.scss"
import PokemonList from "./components/PokemonList";


function App() {
  return (
    <div className="App">
        <Header />
        <PokemonList />

        <Footer />
    </div>
  );
}

export default App;
