import { Container, Col, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Content = () => {
  return (
    <div>
      <Container className='contact-container'>
        <Row>
          <Col className='text-center'>
            <h1 className='contact-title'>Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <ContactForm />
          </Col>
          <Col className='mt-3'>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Content
