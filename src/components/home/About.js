import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>About Us</h1>
            <p className='lead'>
              Ultra Demolition is a company that takes pride in our work and we
              are committed to supplying superior quality results.
            </p>
            <p>
              We are always dedicated and devoted to providing an exceptional
              experience every time.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
