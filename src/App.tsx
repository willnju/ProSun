import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
    public a(){
        fetch('/api/v2/api-docs')
    }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            ｛this.a()｝
          <h1 className="App-title">Welcome to React</h1>
            <button onClick={this.a}>a</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
