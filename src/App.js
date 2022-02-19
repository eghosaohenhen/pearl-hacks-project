import dog from './assets/wide_dog_cover2_.jpg';
import './App.css';
// import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dog} className="App-logo" alt="logo" />
        <p>
          Lol funny funny 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
