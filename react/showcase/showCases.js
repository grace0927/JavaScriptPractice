import React from 'react';
import ShowCaseSearch from 'showCaseSearch';
import $ from 'jquery';

/**
 * a list of show case component
 */
class ShowCases extends React.Component {
  /**
   * gets initial state
   * @returns {array} default empty data
   */
  getInitialState() {
    return { data: [] };
  }

  /**
   * loads component data
   * @returns {null} nothing
   */
  componentDidMount() {
    this.loadCases();
  }

  /**
   * use ajax load component data
   * @returns {null} nothing
   */
  loadCases() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({ data });
      },
      error: (xhr, status, err) => {}
    });
  }

  /**
   * use ajax load component data
   * @returns {string} html string
   */
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">ShowCases</a>
            </div>
            <ShowCaseSearch />
          </div>
        </nav>
        <ShowCaseList data={this.state.data} />
      </div>
    );
  }
}
