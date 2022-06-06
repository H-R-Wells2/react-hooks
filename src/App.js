import './App.css';
import ReducerHook from './components/ReducerHook';
import StateHook from './components/StateHook';
import Temp from './components/Temp';

function App() {
  return (
    <div className="App">
      <h1 className='text-2xl underline font-semibold'>Learning bitch!</h1>
      <StateHook />
      <ReducerHook />
      <Temp />
    </div>
  );
}

export default App;
