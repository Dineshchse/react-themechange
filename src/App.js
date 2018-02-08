import React, { Component } from 'react';
import Swatche from "./swatches";
import Nav from "./nav";
import Main from "./main";
import Footer from "./footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
              <Swatche />
              <Nav />
        </header>
        <Main />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}


export default App;
