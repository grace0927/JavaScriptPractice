import React from 'react';
import $ from 'jquery';
import ShowCaseSearch from './ShowCaseSearch';
import ShowCaseList from './ShowCaseList';

class ShowCases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.loadCases();
  }

  loadCases() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
          this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
      }.bind(this)
    });
  }

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

export default ShowCases;
