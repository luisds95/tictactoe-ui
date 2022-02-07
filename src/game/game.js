import Board from './board';
import React from 'react';


class Game extends React.Component {
  constructor(props) {
    super(props);

    this.getActionFromServer = this.getActionFromServer.bind(this);
  }

  getActionFromServer(squares) {
    const board = this.convertSquaresToServerFormat(squares);
    const getAction = async () => {
      console.log(`http://localho.st:5000/get-action?board=${board}`);
      const response = await fetch(`http://localho.st:5000/get-action?board=${board}`);
      return await response.json();
    };

    const promise = getAction();
    promise.then(
        function(value) {
          console.log(value);
          return value;
        },
    );
  }

  convertSquaresToServerFormat(squares) {
    let board = '';
    for (const square of squares) {
      if (square === 'X') {
        board += '1';
      } else if (square === 'O') {
        board += '2';
      } else {
        board += '0';
      }
    }
    return board;
  }

  render() {
    return (
      <div className = "game">
        <Board getNextAction={this.getActionFromServer} humanFirst={true} />
      </div>
    );
  }
}

export default Game;
