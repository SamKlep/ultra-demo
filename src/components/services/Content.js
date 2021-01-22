import React from 'react'
import {
  Container,
  Row,
  Col,
  Image,
  Jumbotron,
  Button,
  Card,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='text-center'>
            <Image className='services-img' src='/img/dirt1.jpg' fluid />
          </Col>
        </Row>
      </Container>
      <Jumbotron className='services-jumbo bg-white' fluid>
        <Container className='text-center'>
          <h1>
            Ultra Demolition is a company that takes pride in our work and we
            are committed to supplying superior results.
          </h1>
        </Container>
      </Jumbotron>
      <Container className='mt-5 mb-5'>
        <Row className='mt-5 service-card'>
          <Col>
            <Image
              className='text-center'
              src='/img/machine2-services.jpg'
              fluid
            />
          </Col>
          <Col className='align-self-center text-center'>
            <h3>Economical</h3>
            <p>
              Our goal is to provide savings to our clients, in the most
              efficient and economical manner.
            </p>
            <Link to='/contact'>
              <Button>Learn More</Button>
            </Link>
          </Col>
        </Row>
        <Row className='mt-5 service-card'>
          <Col className='align-self-center text-center'>
            <h3>Committed</h3>
            <p>
              We are also committed to complete all projects within the timeline
              set with our clients.
            </p>
            <Link to='/contact'>
              <Button>Learn More</Button>
            </Link>
          </Col>
          <Col>
            <Image
              className='text-center'
              src='/img/truck1-services.jpg'
              fluid
            />
          </Col>
        </Row>
        <Row className='mt-5 service-card'>
          <Col>
            <Image
              className='text-center'
              src='/img/demo1-services.jpg'
              fluid
            />
          </Col>
          <Col className='align-self-center text-center'>
            <h3>Safety First</h3>
            <p>
              Ultra Demolition will always put safety as well as our clients
              interest first.
            </p>
            <Link to='/contact'>
              <Button>Learn More</Button>
            </Link>
          </Col>
        </Row>
        <br />
        <hr />
        <Row className='mt-5 service-card'>
          <Col>
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className='blockquote mb-0'>
                  <p>
                    {' '}
                    From start to finish Ultra Demolition did a very
                    professional job. I will be using them again for any future
                    demolition needs.{' '}
                  </p>
                  <footer className='blockquote-footer'>Diana Torres</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className='blockquote mb-0'>
                  <p>
                    {' '}
                    The right company for the job. You’re in good hands with
                    Ultra Demolition. Honest, hard-working and determined to
                    perform a safe and well job done.{' '}
                  </p>
                  <footer className='blockquote-footer'>Scott Richards </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Content
