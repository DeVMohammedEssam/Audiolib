import React, { Component } from 'react';
import $ from "jquery";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  componentDidMount() {
    const truncateText = (textSelector, maxLetters = 50) => {
      const trimmed = $(`${textSelector}`);
      let shortText = $.trim(trimmed.text()).substring(0, maxLetters)
        .split(" ").slice(0, -1).join(" ") + "...";
      trimmed.text(shortText);

    }
    //text truncate end
    truncateText(".truncate")

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
