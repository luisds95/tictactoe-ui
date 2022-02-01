import './App.css';
import Board from './game/board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Play TicTacToe!</h1>
      </header>
      <section id="Game">
        <Board />
      </section>
    </div>
  );
}

export default App;
