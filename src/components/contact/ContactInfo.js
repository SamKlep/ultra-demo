import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

const ContactInfo = () => {
  return (
    <div>
      <Container>
        <Row>
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

export default ContactInfo
