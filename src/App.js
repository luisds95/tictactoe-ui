import './App.css';
import React from 'react';
import Game from './game/game';
import About from './game/about';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Play TicTacToe!</h1>
        <p>Play against a simple Reinforcement Learning agent that uses Exhaustive Search to find the best possible action!</p>
        <p className="right">See on Github: <a href="https://github.com/luisds95/tictactoe-python">Agent</a>, <a href="https://github.com/luisds95/tictactoe-ui">UI</a></p>
      </header>
      <section id="Game">
        <Game />
      </section>
      <section id="About">
        <About />
      </section>
      <footer>
        <p>App created by Luis Da Silva</p>
        <p>Checkout more content at: <a href="https://luisdasilva.io/">luisdasilva.io/</a></p>
        <p>Get in touch at: <a href="mailto:luisdanield@gmail.com">luisdanield@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
