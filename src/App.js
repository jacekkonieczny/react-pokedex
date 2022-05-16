import SearchPokemon from "./components/SearchPokemon";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/App.scss"
import PokemonCard from "./components/PokemonCard";


function App() {
  return (
    <div className="App">
        <Header />
        <SearchPokemon />
        <PokemonCard />

        <Footer />
    </div>
  );
}

export default App;
