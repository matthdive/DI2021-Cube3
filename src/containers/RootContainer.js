import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer/HomeContainer';
import Layout from "../layouts/Layout";

function RootContainer() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomeContainer />} />
                </Route>
            </Routes>
        </div>
    )
}

export default RootContainer;