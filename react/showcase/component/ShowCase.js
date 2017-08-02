import React from 'react';

class ShowCase extends React.Component {
  render() {
    const cname = `${this.props.cname} thumbnail showcase`;

    return (
      <div className="col-sm-4 col-md-4">
        <a href={this.props.link} className={cname}>
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.desc}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default ShowCase;
