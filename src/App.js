import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// components
import MenuBar from './components/MenuBar';

// pages
import MainPage from './pages/MainPage';


export default class App extends React.Component {
  render() {
    return (
      <Container>
        <MenuBar />

        <BrowserRouter>
          <Route exact path="/" component={MainPage} />
        </BrowserRouter>
      </Container>
    );
  }
}