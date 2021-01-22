import React from 'react'
import emailjs from 'emailjs-com'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

function fun() {
  document.getElementById('from_name').value = ''

  document.getElementById('user_email').value = ''

  document.getElementById('message').value = ''
}

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'contact-form', e.target, 'user_jWoWqjSLfPIa1tEnJN9a4')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    fun()
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form
              id='contact-form'
              className='contact-form'
              onSubmit={sendEmail}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id='from_name'
                  type='text'
                  name='from_name'
                  placeholder='John Doe'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id='user_email'
                  type='email'
                  name='user_email'
                  placeholder='name@example.com'
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  id='message'
                  as='textarea'
                  name='message'
                  rows={6}
                />
              </Form.Group>
              <Button variant='info' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
