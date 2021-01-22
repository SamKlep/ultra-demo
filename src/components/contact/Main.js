import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron className='contact-jumbo' fluid>
        <Container className='text-center '>
          <h1 className='display-4 text-light'>Contact</h1>
        </Container>
      </Jumbotron>
      <Jumbotron className='contact-content bg-white' fluid>
        <Container className='text-center '>
          <h1>Here for all of your Demolition & Excavation needs!</h1>
          <p className='lead'>
            Now serving all of Southeast Texas and surrounding areas! Bonded &
            Insured
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col className='text-center'></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
