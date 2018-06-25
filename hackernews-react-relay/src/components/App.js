import React, { Component } from 'react';
import '../styles/App.css';
import LinkListPage from './LinkListPage';
import CreateLink from './CreateLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LinkListPage />
        <CreateLink />
      </div>
    );
  }
}

export default App;
