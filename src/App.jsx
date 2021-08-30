import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
function App() {
  return (
    <React.Fragment>
      <h1>Art Club</h1>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
