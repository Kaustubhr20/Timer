
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <h2>Welcome to the Timer app built in React JS</h2>
      <Timer start={Date.now()}/>
    </div>
  );
}

export default App;
