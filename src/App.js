import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import WelcomePage from './components/Welcome.page';
import GetStartedPage from './components/GetStarted.page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailEntered: false
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
              <Link to="/">
                <img src="http://placehold.it/80x80?text=logo" className="App-logo" alt="logo" />
              </Link>
            <h1 className="App-title">Welcome to BookBuddy</h1>
          </header>
          <div>
            <Route exact path="/" component={WelcomePage} render={WelcomePage.getTitle}/>
            <Route path="/get-started" component={GetStartedPage} render={GetStartedPage.setTitle}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
