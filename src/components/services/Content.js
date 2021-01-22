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

const Content = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image className='text-center' src='/img/dirt1.jpg' fluid />
          </Col>
        </Row>
      </Container>
      <Jumbotron className='bg-white' fluid>
        <Container className='text-center'>
          <h1>
            Ultra Demolition is a company that takes pride in our work and we
            are committed to supplying superior results.
          </h1>
        </Container>
      </Jumbotron>
      <Container className='mt-5 mb-5'>
        <Row className='mt-5'>
          <Col>
            <Image className='text-center' src='/img/dirt1.jpg' fluid />
          </Col>
          <Col>
            <h3>Economical</h3>
            <p>
              Our goal is to provide savings to our clients, in the most
              efficient and economical manner.
            </p>
            <Button>Learn More</Button>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <h3>Committed</h3>
            <p>
              We are also committed to complete all projects within the timeline
              set with our clients.
            </p>
            <Button>Learn More</Button>
          </Col>
          <Col>
            <Image className='text-center' src='/img/dirt1.jpg' fluid />
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <Image className='text-center' src='/img/dirt1.jpg' fluid />
          </Col>
          <Col>
            <h3>Safety First</h3>
            <p>
              Ultra Demolition will always put safety as well as our clients
              interest first.
            </p>
            <Button>Learn More</Button>
          </Col>
        </Row>
        <br />
        <hr />
        <Row className='mt-5'>
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
