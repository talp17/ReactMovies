
import React, { Component } from 'react';

class Movie extends Component {

  render() {
    
    return (
      <div className="col-sm-4 mb-5">
          <div className="card">
              <img className="card-img-top" src={this.props.m.Poster}/>
              <div className="card-body">
                <h5 className="card-title">{this.props.m.Title}</h5>
                <hr/>
                <p className="card-text">{this.props.m.Year}</p>
              </div>
            </div>
      </div>
    )
  };
}

export default Movie;
