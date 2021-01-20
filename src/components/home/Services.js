import { Container, Row, Col, Carousel } from 'react-bootstrap'

const Services = () => {
  return (
    <div>
      <Container>
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
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='/img/house2.jpg'
                  alt='First slide'
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='/img/demo15.jpg'
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src='/img/dirt4.jpg'
                  alt='Third slide'
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services