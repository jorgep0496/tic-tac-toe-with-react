import React from 'react';
import '../styles/Announcement.css';

export default class Announcement extends React.Component {
    render() {
        return (
            <div className={this.props.winner ? 'visible' : 'hidden'}>
                <h2>Game Over</h2>
            </div>
        )
    }
}
