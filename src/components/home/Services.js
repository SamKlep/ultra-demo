import { Container, Row, Col, Carousel } from 'react-bootstrap'

const Services = () => {
  return (
    <div>
      <Container className='services-container'>
        <Row>
          <Col>
            <h1>Our Services</h1>
            <p className='lead'>
              Our goal is to provide savings to out clients, in the most
              efficient and economical manner. We are also committed to complete
              all projects within the timeline set with our clients. Ultra
              Demolition will always put safety as well as our clients interest
              first.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='carousel-container'>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='/img/house2.jpg'
                  alt='First slide'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='/img/demo15.jpg'
                  alt='Third slide'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='/img/dirt4.jpg'
                  alt='Third slide'
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services
