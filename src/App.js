import './App.css';
import EffectHook from './components/EffectHook';
import ImperativeHandle from './components/ImperativeHandle';
import LayoutEffectHook from './components/LayoutEffectHook';
import ReducerHook from './components/ReducerHook';
import RefHook from './components/RefHook';
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
      <RefHook />
      <LayoutEffectHook />
      <ImperativeHandle />
    </div>
  );
}

export default App;
