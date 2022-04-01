import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootContainer from './containers/RootContainer';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <RootContainer/>
    </BrowserRouter>
);







