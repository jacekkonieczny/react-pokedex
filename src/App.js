import SearchPokemon from "./components/SearchPokemon";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/App.scss"


function App() {
  return (
    <div className="App">
        <Header />
        <SearchPokemon />

        <Footer />
    </div>
  );
}

export default App;
