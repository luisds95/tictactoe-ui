import './App.css';
import React from 'react';
import Game from './game/game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Play TicTacToe!</h1>
      </header>
      <section id="Game">
        <Game />
      </section>
    </div>
  );
}

export default App;
