import React, ReactDOM from 'react';
import $ from 'jquery';

const ShowCases = React.createClass({
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
  },

  getInitialState() {
    return { data: [] };
  },

  componentDidMount() {
    this.loadCases();
  },

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
  },
});

const ShowCaseSearch = React.createClass({
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
  },
});

const ShowCaseList = React.createClass({
  render() {
    const showcases = this.props.data.map((showcase) => {
      return (
        <ShowCase key={showcase.id} link={showcase.link} name={showcase.name} img={showcase.img} desc={showcase.desc} cname={showcase.class}/>
      );
    });

    return (
      <div className="show-case-list">
        {showcases}
      </div>
    );
  }
});

const ShowCase = React.createClass({
  render() {
    const cname = this.props.cname + ' thumbnail showcase';
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
});

ReactDOM.render(
  <ShowCases url="showcase/api" />,
  document.getElementById('content')
);
