import React, { Component } from 'react';
import './App.css';
import HomeView from './pages/home';
import TableView from './pages/table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    },
    this.callApi=this.callApi.bind(this);
  }
  componentDidMount() {
    this.callApi()
      .then(response => this.setState({
        response: response
      }
    ))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/rickandmorty');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <HomeView />
        <TableView data={ this.state.response } />
      </div>
    );
  }
}

export default App;
