import React from 'react';

/**
 * a list of show case component
 * @returns {null} nothing
 */
class ShowCaseSearch extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form className="navbar-form navbar-right" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
      </div>
    );
  }
}

export default ShowCaseSearch;
