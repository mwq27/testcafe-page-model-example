import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: sessionStorage.getItem('isAuth') || 'unauthorized',
    username: '',
    password: '',
  };

  onLogin = e => {
    e.preventDefault();
    this.setState({ isLoggedIn: 'authorized' }, prevState => {
      sessionStorage.setItem('isAuth', 'authorized');
    });
  };

  logOut = () => {
    this.setState({ isLoggedIn: 'unauthorized' }, () => {
      sessionStorage.setItem('isAuth', 'unauthorized');
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" data-locator="title-text">
            Welcome to React
          </h1>
        </header>

        {this.state.isLoggedIn === 'unauthorized' ? (
          <div>
            <form onSubmit={this.onLogin}>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" data-locator="username" id="username" />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input type="password" data-locator="password" id="password" />
              </div>

              <button data-locator="login-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        ) : null}

        {this.state.isLoggedIn === 'authorized' ? (
          <div>
            <p>Thanks for logging in!!!</p>
            <button data-locator="logout-button" onClick={this.logOut}>
              Logout
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
