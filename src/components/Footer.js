import { Container, Row, Col, Nav, Image } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Nav
        variant='dark'
        className='bg-secondary mt-5'
        defaultActiveKey='/home'
        as='ul'>
        <Container className='mt-5'>
          <Row>
            <Col className='text-center'>
              <Image className='mx-auto' src='img/ultrademo-logo.png' />
              <h6>2021 © </h6>
            </Col>
            <Col className='text-center'>
              <Nav.Item as='li'>
                <Nav.Link href='/'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link href='/about'>About</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link href='/services'>Services</Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link href='/contact'>Contact</Nav.Link>
              </Nav.Item>
            </Col>
            <Col className='text-center py-3'>
              <h4>Xavier Chavarria – June Jones</h4>
              <h5>Owner & Operator</h5>
              <h5>Email Us</h5>
              <p>
                409-812-6292 <br />
                409-504-2241
              </p>
            </Col>
          </Row>
        </Container>
      </Nav>
    </>
  )
}

export default Footer
