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
      <div className="spacer" />
      <footer>
        <p>App created by Luis Da Silva</p>
        <p>Checkout more content at: <a href="https://luisds95.github.io/">luisds95.github.io/</a></p>
        <p>Get in touch at: <a href="mailto:luisdanield@gmail.com">luisdanield@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
