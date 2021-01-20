import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ServicesScreen from './screens/ServicesScreen'
import ContactScreen from './screens/ContactScreen'
import Footer from './components/Footer'
import Switch from 'react-bootstrap/esm/Switch'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutScreen} exact />
        <Route path='/services' component={ServicesScreen} exact />
        <Route path='/contact' component={ContactScreen} exact />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
