import React from 'react';
import PropTypes from 'prop-types';


class Square extends React.Component {
  render() {
    return (
      <button className={this.props.className} onClick={
        () => this.props.onClick()
      }>
        {this.props.value}
      </button>
    );
  }
}


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill('\u2060'),
      winner: 'NA',
    };

    this.humanPlayer = 'X';
    this.aiPlayer = 'O';

    this.handleClick = this.handleClick.bind(this);
  }

  restart(humanFirst) {
    const squares = Array(9).fill('\u2060');
    if (humanFirst) {
      this.humanPlayer = 'X';
      this.aiPlayer = 'O';
    } else {
      this.humanPlayer = 'O';
      this.aiPlayer = 'X';
      const ramdomPlay = Math.floor(Math.random() * 9);
      squares[ramdomPlay] = this.aiPlayer;
    }

    this.setState({
      squares: squares,
      winner: 'NA',
    });
  }

  handleClick(squareIdx) {
    const squares = this.state.squares.slice();
    const validMove = this.makeMove(squares, this.humanPlayer, squareIdx);

    if (validMove) {
      this.setState({squares: squares, winner: 'NA'});
      this.getActionFromServer(squares);
    }
  }

  makeMove(squares, player, idx) {
    if (this.state.winner === 'NA' && idx !== null && squares[idx] === '\u2060') {
      squares[idx] = player;
      return true;
    }
    return false;
  }

  getActionFromServer(squares) {
    const board = this.convertSquaresToServerFormat(squares);
    const getAction = async () => {
      const response = await fetch(`http://localho.st:5000/get-action?board=${board}`);
      return await response.json();
    };

    const promise = getAction();
    promise.then(
        (value) => {
          console.log(value);
          this.makeMove(squares, this.aiPlayer, value.action);
          this.setState({squares: squares, winner: value.result});
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

  renderSquare(squareIdx, options = {}) {
    let className = 'square';
    if (options.right) className += ' square-right';
    if (options.bottom) className += ' square-bottom';

    return (
      <Square
        value={this.state.squares[squareIdx]}
        onClick={() => this.handleClick(squareIdx)}
        className={className}/>
    );
  }

  renderTitle() {
    let title = '';

    if (this.state.winner === 'NA' || !this.state.winner) {
      title = `Next player: ${this.humanPlayer}`;
    } else if (this.state.winner === 'DRAW') {
      title = 'Draw!';
    } else {
      title = `${this.state.winner} wins!`;
    }

    return title;
  }

  render() {
    return (
      <div className="outer-board">
        <h2 className="board-title">{this.renderTitle()}</h2>
        <div className="board">
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2, {right: true})}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5, {right: true})}
          </div>
          <div className="board-row">
            {this.renderSquare(6, {bottom: true})}{this.renderSquare(7, {bottom: true})}{this.renderSquare(8, {right: true, bottom: true})}
          </div>
        </div>
        <button onClick={() => this.restart(true)}>Play X!</button>
        <button onClick={() => this.restart(false)}>Play O!</button>
      </div>
    );
  }
}


Square.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};


Board.propTypes = {
  getNextAction: PropTypes.func,
  humanFirst: PropTypes.bool,
};


export default Board;
