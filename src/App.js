import dog from './assets/wide_dog_cover2_.jpg';
import React from 'react'
import './App.css';
import Main from './components/Main.js'
import {  Button, Checkbox, Form, Message} from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main/>
      </header>
    </div>
  );
}

export default App;
