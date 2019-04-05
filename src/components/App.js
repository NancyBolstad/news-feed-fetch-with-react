import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newsUS:{
        query:'country=us'
      },
      newsBBC:{
        query:'sources=bbc-news'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Feed</h1>
        </header>
        <News news={this.state.newsBBC}/>
        <News news={this.state.newsUS}/>
      </div>
    );
  }
}
export default App;
