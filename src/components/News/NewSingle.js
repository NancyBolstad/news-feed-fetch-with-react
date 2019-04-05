import React from 'react';

const NewSingle = ({item}) => (
  <div className="col s4">
    <div className="card large">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title}></img>
        <span className="card-title white-text z-depth-2">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p className="flow-text">{item.description}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank">Full article</a>
      </div>
    </div>
    </div>
);

export default NewSingle;
