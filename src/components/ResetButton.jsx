import React from 'react';
import '../styles/ResetButton.css';

export default class ResetButton extends React.Component {

    render() {
        return (
            <div className={this.props.winner ? 'visible' : 'hidden'}>
                <button type="button" className="btn btn-secondary" onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}
