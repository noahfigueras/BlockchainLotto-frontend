import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Join the Blockchain Lottery and win millions every week.
        </p>
        <button
        className="join_lottery" onClick={() => alert("Suck it bitch!")}
        >
          Enter Lottery
        </button>
      </header>
    </div>
  );
}

export default App;
