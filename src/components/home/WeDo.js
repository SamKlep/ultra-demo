import { Container, Row, Col, Jumbotron } from 'react-bootstrap'

const WeDo = () => {
  return (
    <div>
      <Container className='whatwedo-container'>
        <Row>
          <Col className='mx-auto text-center' lg={8}>
            <h1>What we Do</h1>
            <p className='lead'>
              Ultra Demolition is dedicated to providing the safest workplace
              possible. Safety has played a huge role in the success of this
              company, although this achievement has not been acquired by safety
              alone. Our success has also been attributed to our ability to
              analyze and evaluate a project. We develop and implement the most
              innovative methods which will equate in cost and time, which in
              turn will show a reduced expense to our clients.
            </p>
          </Col>
        </Row>
      </Container>
      <Jumbotron className='jumbo-quote' fluid>
        <Container>
          <blockquote className='blockquote text-white text-center'>
            <h3>
              "Always dedicated and devoted to providing an exceptional
              experience every time."
            </h3>
          </blockquote>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default WeDo
