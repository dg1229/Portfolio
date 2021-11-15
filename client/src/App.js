import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";

import GlobalStyle from "./styles/Global";

import Welcome from './components/welcome/Welcome'

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (

      <>
        <GlobalStyle />
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Welcome />
      </>

    )
  }
};

export default App;