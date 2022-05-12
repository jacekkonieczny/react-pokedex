import SearchPokemon from "./components/SearchPokemon";
import Header from "./components/Header";
import "./scss/App.scss"


function App() {
  return (
    <div className="App">
        <Header />
        <SearchPokemon />
    </div>
  );
}

export default App;
