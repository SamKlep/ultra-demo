const { default: Main } = require('../components/services/Main')
const { default: Content } = require('../components/services/Content')

const ServicesScreen = () => {
  return (
    <div>
      <Main />
      <Content />
    </div>
  )
}

export default ServicesScreen
