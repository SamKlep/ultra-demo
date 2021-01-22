import { Form, Container, Col, Row, ListGroup, Button } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='text-center'>
            <h1>Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='John Doe' />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
              </Form.Group>

              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows={6} />
              </Form.Group>
              <Button variant='info' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
          <Col className='align-self-center text-center'>
            <h3>Ultra Demolition</h3>
            <h3>Beaumont, TX</h3>

            <h5>Xavier Chavarria – June Jones</h5>
            <h5>Owner & Operator</h5>

            <ListGroup className='contact-group mx-auto' variant='flush'>
              <ListGroup.Item>
                <a href='mailto:ultrademolitiontx@gmail.com'>
                  ultrademolitiontx@gmail.com
                </a>
              </ListGroup.Item>
              <ListGroup.Item>(409) 812 6292</ListGroup.Item>
              <ListGroup.Item>(409) 504 2241</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactForm
