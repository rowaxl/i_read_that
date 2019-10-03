import React from 'react';
import { Menu, MenuItem, MenuHeader } from 'semantic-ui-react';

export default class MenuBar extends React.Component {
  render() {
    return (
      <Menu fixed="top" >
        <MenuHeader>
          The Shiories
        </MenuHeader>

        <MenuItem>
          Home
        </MenuItem>

        <MenuItem>
          Posts
        </MenuItem>
      </Menu>
    )
  }
};
