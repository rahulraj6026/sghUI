import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () => {
  return(
    <>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App