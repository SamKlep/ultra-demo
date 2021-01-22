import { Jumbotron, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='align-self-center'>
      <Jumbotron className='main-jumbo ' fluid>
        <Container className='text-light text-center '>
          <h1 className=''>
            Here for all of your Demolition & Excavation needs.
          </h1>
          <h4 className='mt-3'>
            Serving all of Southeast Texas and surrounding areas!
          </h4>
          <Link to='/contact'>
            <Button className='mt-1' variant='info'>
              Get a FREE Quote!
            </Button>
          </Link>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
