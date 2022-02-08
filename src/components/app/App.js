import './App.css';
import Counter from '../Counter/Counter';
import SmartCount from '../SmartCounter/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

function App() {
  return (
    <div className='App'>
      <Counter />
      <hr />
      <SmartCount />
      <hr />
      <IfoodCounter />
    </div>
  )
}

export default App;