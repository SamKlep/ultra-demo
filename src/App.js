import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ServicesScreen from './screens/ServicesScreen'
import ContactScreen from './screens/ContactScreen'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />

      <Route path='/' component={HomeScreen} exact />
      <Route path='/about' component={AboutScreen} />
      <Route path='/services' component={ServicesScreen} />
      <Route path='/contact' component={ContactScreen} />
      <Footer />
    </Router>
  )
}

export default App
