import React from 'react';
import { Container, Menu, MenuItem, MenuHeader } from 'semantic-ui-react';

export default class App extends React.Component {
    render() {
      return (
        <Container>
          <Menu fixed="top" >
            <MenuHeader>
              Reading Stamps
            </MenuHeader>
            <MenuItem>
              Home
            </MenuItem>
            <MenuItem>
              Posts
            </MenuItem>
          </Menu>
        </Container>
      );
    }
}