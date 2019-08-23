import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={MainPage} />
            </BrowserRouter>
        );
    }
}