import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { name, email, subject, message } = this.state;

    let templateParams = {
      from_name: email,
      to_name: 'villaoriginals@icloud.com',
      subject: subject,
      message: message,
    }

    emailjs.send(
      'service_yczhbxr',
      'template_cz073mg',
      templateParams,
      'user_4uXUjZlbUjVaKzDkKgEe2',
    )

    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  handleChange = (param, event) => {
    this.setState({ [param]: event.target.value });
  };

  render() {
    return (
      <div className='ContactForm'>
        <Form onSubmit={ this.handleSubmit.bind(this) }>
          <FormGroup controlid='formBasicEmail'>
            <Label className='text-muted'>Email Address</Label>
            <Input
              type='email'
              name='email'
              value={ this.state.email }
              className='text-primary'
              onChange={ this.handleChange.bind(this, 'email') }
              placeholder='Enter email'
            />
          </FormGroup>

          <FormGroup controlid='formBasicName'>
            <Label className='text-muted'>Name</Label>
            <Input
              type='text'
              name='name'
              value={ this.state.name }
              className='text-primary'
              onChange={ this.handleChange.bind(this, 'name') }
              placeholder='Name'
            />
          </FormGroup>

          <FormGroup controlid='formBasicSubject'>
            <Label className='text-muted'>Subject</Label>
            <Input
              type='text'
              name='subject'
              value={ this.state.subject }
              className='text-primary'
              onChange={ this.handleChange.bind(this, 'subject') }
              placeholder='Subject'
            />
          </FormGroup>

          <FormGroup controlid='formBasicMessage'>
            <Label className='text-muted'>Message</Label>
            <Input
              type='textarea'
              name='message'
              value={ this.state.message }
              className='text-primary'
              onChange={ this.handleChange.bind(this, 'message') }
            />
          </FormGroup>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
};

export default ContactForm;