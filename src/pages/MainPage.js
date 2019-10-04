import React from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';

export default class MainPage extends React.Component {
  onFirstNameChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input onChange="onFirstNameChange" placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}