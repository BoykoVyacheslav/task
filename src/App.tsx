import React from 'react';
import './App.css';
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
        <NavigationBar header={ <h3>Some header</h3> }/>
    </div>
  );
}

export default App;
