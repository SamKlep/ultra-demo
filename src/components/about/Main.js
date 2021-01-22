import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron className='bg-white text-center'>
        <h1 className='display-4'>About</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h1>Ultra Demolition is a company that takes pride in our work.</h1>
            <p>
              We are committed to supplying superior results and are always
              dedicated and devoted to provide an exceptional experience every
              time.
            </p>
            <p>
              On all of our projects, Ultra Demolition performs all the
              demolition work with our own workforce. We employ only the highest
              of skilled experts whom are versed in all aspects of the
              demolition industry. Each and every member of our staff are
              thoroughly trained in the most current health and safety
              standards.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
