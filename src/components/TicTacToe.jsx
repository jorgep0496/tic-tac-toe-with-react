import React, { useState } from 'react';

import '../styles/TicTacToe.css';

import Announcement from './Announcement.jsx';
import ResetButton from './ResetButton.jsx';
import Tile from './Tile.jsx';

export default class TicTacToe extends React.Component {
    constructor() {
        super();
        this.state = {
            gameBoard: [
                ' ', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' '
            ],
            turn: "X",
            winner: null
        }
    }

    resetBoard() {
        this.setState({
            gameBoard: [
                ' ', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' '
            ],
            turn: "X",
            winner: null
        })
    }
    
    updateBoard(loc, player) {
        if (this.state.gameBoard[loc] === 'X' || this.state.gameBoard[loc] === 'O' || this.state.winner) {
            //Movimiento invalido
            return;
        }

        //Posibles combinaciones para ganar:
        let currentGameBoard = this.state.gameBoard;
        currentGameBoard.splice(loc, 1, this.state.turn);
        this.setState({gameBoard: currentGameBoard});

        let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
        if (topRow.match(/XXX|OOO/)) {
            this.setState({winner: this.state.turn});
            return;
        }
        let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
        if (middleRow.match(/XXX|OOO/)) {
            this.setState({winner: this.state.turn});
            return;
        }
        let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
        if (bottomRow.match(/XXX|OOO/)) {
            this.setState({winner: this.state.turn});
            return;
        }
        let leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
        if (leftCol.match(/XXX|OOO/)) {
            this.setState({winner: this.state.turn});
            return;
        }
        let middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
        if (middleCol.match(/XXX|OOO/)) {
            this.setState({winner: this.state.turn});
            return;
        }
        let rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
        if (rightCol.match(/XXX|OOO/)) {
            this.setState({winner: this.state.turn});
            return;
        }
        let leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
        if (leftDiag.match(/XXX|OOO/)) {
            this.setState({winner: this.state.turn});
            return;
        }
        let rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
        if (rightDiag.match(/XXX|OOO/)) {
            this.setState({winner: this.state.turn});
            return;
        }
        let moves = this.state.gameBoard.join('').replace(/ /g, '');
        if (moves.length === 9) {
            this.setState({winner: 'draw'});
        }
        this.setState({turn: (this.state.turn === 'X') ? 'O' : 'X'})
    }

    render() {

        return (
            <div className="container">
                <div className="menu">
                    <h1>Tic-Tac-Toe</h1>
                    <Announcement winner={this.state.winner} />
                    <ResetButton reset={this.resetBoard.bind(this)} winner={this.state.winner} />
                </div>
                <div className="tilesContainer">
                    {this.state.gameBoard.map(function (value, i) {
                        return (
                            <Tile
                                key={i}
                                loc={i}
                                value={value}
                                updateBoard={this.updateBoard.bind(this)}
                                turn={this.state.turn} />
                        )
                    }.bind(this))}
                </div>
            </div>
        );
    }
}
