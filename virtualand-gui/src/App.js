import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landmap from "./landmap/Landmap";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <Landmap width="80" height="30"/>
        </div>
    );
}

export default App;
