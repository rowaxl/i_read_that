import React from 'react';
import { Container, Menu, MenuItem, MenuHeader, Form, FormTextArea } from 'semantic-ui-react';

export default class App extends React.Component {
    render() {
      return (
        <div>
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
          
          <Container>
            <Form>
              <FormTextArea />
              <FormTextArea />
              <FormTextArea />
              <FormTextArea />
            </Form>
          </Container>
        </div>
      );
    }
}