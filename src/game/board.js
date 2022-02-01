import React from "react";


class Square extends React.Component {
    render() {
        return (
            <button className={this.props.className} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill("\u2060"),
            firstPlayer: true,
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(i) {
        const squares = this.state.squares.slice()
        if (squares[i] === "\u2060") {
            squares[i] = this.state.firstPlayer ? 'X' : 'O';
            this.setState({squares: squares, firstPlayer: !this.state.firstPlayer})
        }        
    }

    renderSquare(i, options = {}) {
        let className = "square";
        if (options.right) className += " square-right";
        if (options.bottom) className += " square-bottom";

        return (
            <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} className={className}/>
        )
    }

    render() {
        return (
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
        )
    };
}

export default Board;