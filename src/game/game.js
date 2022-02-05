import Board from './board';
import React from 'react';


class Game extends React.Component {
  render() {
    return (
      <div className = "game">
        <Board />
      </div>
    );
  }
}

export default Game;
