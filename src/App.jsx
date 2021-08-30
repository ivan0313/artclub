import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
