import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Jumbotron className='bg-white display-4' fluid>
        <Container className='text-center'>
          <h1>Services</h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Main
