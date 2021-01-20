import { Jumbotron, Container, Button } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron className='main-jumbo align-items-center' fluid>
        <Container className='text-light text-center '>
          <h1 className=''>
            Here for all of your Demolition & Excavation needs.
          </h1>
          <h4 className='mt-3'>
            Serving all of Southeast Texas and surrounding areas!
          </h4>
          <Button className='mt-3' variant='info'>
            Get a FREE Quote!
          </Button>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
