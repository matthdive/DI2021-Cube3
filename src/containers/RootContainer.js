import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer/HomeContainer';

function RootContainer() {
    return (
        <Routes>
            <Route path={"/"} element={<HomeContainer />} />
        </Routes>
    )
}

export default RootContainer;