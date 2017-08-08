import React from 'react';

/**
 * showcase component
 */
class ShowCase extends React.Component {
  /**
   * render showcase component
   * @return {XML} showcase DOM
   */
  render() {
    const classes = `${this.props.classes} thumbnail showcase`;

    return (
      <div className="col-sm-4 col-md-4">
        <a href={this.props.link} className={classes}>
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
          </div>
        </a>
      </div>
    );
  }
}

ShowCase.propTypes = {
  classes: React.PropTypes.string,
  description: React.PropTypes.string,
  link: React.PropTypes.string,
  name: React.PropTypes.string,
};

ShowCase.defaultProps = {
  classes: '',
  description: '',
  link: '',
  name: '',
};

export default ShowCase;
