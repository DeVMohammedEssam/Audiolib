import React, { Component } from 'react';
import $ from "jquery";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  componentDidMount() {


  }



  render() {
    return (
      <Router>
        <div className="App" data-lang="ar">
          <AppRouter />
        </div>
      </Router>
    );
  }
}

export default App;
