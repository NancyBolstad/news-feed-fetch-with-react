import React, { Component } from "react";
import NewSingle from "./NewSingle";
import Error from "./Error";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?${
      this.props.news.query
    }&apiKey=f987c29cd18147f8981d30cee7fc1363`;

    (async () => {
      try {
        const data = await (await fetch(url)).json();
        this.setState({
          news: data.articles
        });
      } catch (error) {
        this.setState({
          error: true
        });
      }
    })();
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.news.map(item => (
        <NewSingle key={item.url} item={item} />
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
