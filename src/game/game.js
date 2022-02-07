import Board from './board';
import React from 'react';


class Game extends React.Component {
  render() {
    return (
      <div className = "game">
        <Board getNextAction={this.getActionFromServer} />
      </div>
    );
  }
}

export default Game;
