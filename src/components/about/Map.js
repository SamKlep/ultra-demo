import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Container, Jumbotron } from 'react-bootstrap'

const Map = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.0802,
      lng: -94.1266,
    },
    zoom: 11,
  }

  render() {
    return (
      <>
        <Container className='mt-5'>
          <div
            style={{ height: '100vh', width: '100%', paddingBottom: '30px' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyAjjINNS_YKU59Wt1jQwU07vPZsn87BYVI',
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}>
              <Map lat={59.955413} lng={30.337844} text='My Marker' />
            </GoogleMapReact>
          </div>
        </Container>
        <Jumbotron className='bg-white text-center' fluid>
          <Container>
            <h1 className='text-info'>
              Serving all of Southeast Texas and surrounding areas!
            </h1>
          </Container>
        </Jumbotron>
      </>
    )
  }
}

export default SimpleMap
