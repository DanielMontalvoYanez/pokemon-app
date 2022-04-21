import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import store from './redux/store';
// import PokemonsContainer from './components/PokemonsContainer';
import Navbar from './components/Navbar';
import PokemonsList from './components/PokemonsList';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <PokemonsList />
      </div>
    </Provider>
  );
}

export default App;
