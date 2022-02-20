import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Courses from "./components/Courses"


export default class Routing extends Component {
    render() {
        return (
            <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path="/Courses" element={<Courses/>} />
            </Routes>

        )
    }
}