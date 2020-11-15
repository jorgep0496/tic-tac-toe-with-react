import React from 'react';
import '../styles/Tile.css';

export default class Tile extends React.Component {
    tileClick(props) {
        props.updateBoard(props.loc, props.turn);
    }
    render() {
        return (
            <div className={"tile " + this.props.loc} onClick={() => this.tileClick(this.props)}>
                <p>{this.props.value}</p>
            </div>
        )
    }
}
