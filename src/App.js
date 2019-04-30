import React, { Component } from 'react';
import AppRouter from "./routes/AppRouter";

import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {




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
