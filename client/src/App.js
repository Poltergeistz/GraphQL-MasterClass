import React, { Component } from 'react';
import Breaches from './components/Breaches';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="ui menu">
      <div className="header item">GraphQL MasterClass</div>
      </div>
      <div className="ui container">
      <h1 className="ui header">My awesome website</h1>
      </div>
      <Breaches/>
      </ApolloProvider>
    );
  }
}

export default App;
