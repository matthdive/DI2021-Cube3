import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootContainer from './containers/RootContainer';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <RootContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


