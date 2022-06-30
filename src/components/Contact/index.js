import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    // 
    //   <form id="contact-form" onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email address:</label>
    //       <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
    //     </div>
    //     {errorMessage && (
    //       <div>
    //         <p className="error-text">{errorMessage}</p>
    //       </div>
    //     )}
    //     <button data-testid="button" type="submit">Submit</button>
    //   </form>


<section id="contact">
  <h1 data-testid="h1tag">Contact me</h1>
    <Form id="contact-form" onSubmit={handleSubmit}>
      {/* NAME */}
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control type="text" name="name" defaultValue={name}  placeholder="Enter name(first and last)" onBlur={handleChange} />
      </Form.Group>
      {/* EMAIL */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Enter email" />
      </Form.Group>
      {/* MESSAGE */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="message">Message</Form.Label>
        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
      </Form.Group>
      {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</section>
  );
}

export default ContactForm;
