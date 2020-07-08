import React from 'react';
import './App.css';
import { NavigationBar } from "./components/NavigationBar";
import menu from "./resources/menu.json";

function App() {
  return (
    <div className="App">
        <NavigationBar header={ <h3>Some header</h3> } menu={ menu.data }/>
    </div>
  );
}

export default App;
