import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';

import TicTacToe from './components/TicTacToe.jsx'

import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(
<TicTacToe />,
document.querySelector("#root"));