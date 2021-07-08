import React from 'react'
import Nav from './Nav'
import About from './About'
import Products from './Products'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <section className="main">
      <Router>
      <Nav />
      
        <Switch >
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/products" >
          <Products />
        </Route>

        <Route path="*" >
          <h1>Error</h1>
        </Route>
      </Switch>
       </Router>
    </section>
   
  );
}

export default App;