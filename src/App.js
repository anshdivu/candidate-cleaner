import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showDrawer: false };
  }

  toggle() {
    this.setState(prevState => ({
      showDrawer: !prevState.showDrawer
    }));
  }

  render() {
    return (
      <MuiThemeProvider>
        <AppBar
          className="App"
          title="Candidate Cleaner"
          onLeftIconButtonTouchTap={() => this.toggle()}
        >
          <Drawer open={this.state.showDrawer} />
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
// <div className="App">
//   <div className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h2>Welcome to React</h2>
//   </div>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
