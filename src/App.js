import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quote';

function App() {
  return (
    // Write JSX
    <div className="app">
      <Quotes />
      <Calculator />
    </div>
  );
}

export default App;
