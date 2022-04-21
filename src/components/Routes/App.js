import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import PokemonsList from '../PokemonsList';
import PokemonDetails from '../PokemonDetails';
function App() {
  return (
    <div className='APP'>
      <Navbar />
      <Routes>
        <Route path='/' element={<PokemonsList />} />
        <Route path='/Details/:pokemon' element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
