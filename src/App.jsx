import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Admin from './pages/Admin';



function App() {
  return (
    <div>
      <Router basename="/artclub">
        
        <Switch>
          <Route path="/admin" exact>
            <Admin />
          </Route>

          <Route path="/">
            <Nav />
            <Route path="/" exact component={Home} />
            <Footer />
          </Route>

        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
