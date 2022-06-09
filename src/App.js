import './App.css';
import EffectHook from './components/EffectHook';
import ReducerHook from './components/ReducerHook';
import StateHook from './components/StateHook';
import Temp from './components/Temp';

function App() {
  return (
    <div className="App py-5">
      <h1 className='text-2xl underline font-semibold'>Learning HOOKS!</h1>
      <StateHook />
      <ReducerHook />
      <Temp />
      <EffectHook />
    </div>
  );
}

export default App;
