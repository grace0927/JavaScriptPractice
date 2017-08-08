import $ from 'jquery';
import React from 'react';
import ShowCaseSearch from './ShowCaseSearch';
import ShowCaseList from './ShowCaseList';

/**
 * showcases component
 */
class ShowCases extends React.Component {
  /**
   * constructor
   * @param {object} props props
   */
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  /**
   * load showcases after mount
   * @returns {void}
   */
  componentDidMount() {
    this.loadCases();
  }

  /**
   * fire AJAX request to retrieve showcases and set state thereafter
   * @returns {void}
   */
  loadCases() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({ data });
      },
      error: (xhr, status, err) => {
        console.error(err);
      },
    });
  }

  /**
   * render showcase component
   * @return {XML} showcases DOM
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

ShowCases.propTypes = {
  url: React.PropTypes.string,
};

ShowCases.defaultProps = {
  url: '',
};

export default ShowCases;
