import './App.css';
import { AnimalDisplay } from './components/AnimalDisplay';
import { AnimalInput } from './components/AnimalInput';

function App() {
  return (
    <div className="App">
      <AnimalInput />
      <AnimalDisplay />
    </div>
  );
}

export default App;
