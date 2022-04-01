import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import Layout from "../layouts/Layout";

function RootContainer() {
    return (
        <div>
            <Routes>
                    <Route index element={<HomeContainer />} />
            </Routes>
        </div>
    )
}

export default RootContainer;