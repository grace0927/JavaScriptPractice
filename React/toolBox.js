var ToolBox = React.createClass({
	loadTools: function() {
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
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadTools();
	},
	render: function() {
		return (
			<div>
				<nav className="navbar navbar-default">
					<div class="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand">Tools</a>
						</div>
						<ToolSearch />
					</div>
				</nav>
				<ToolList data={this.state.data} />
			</div>
		);
	}
});

var ToolSearch = React.createClass({
	render: function() {
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
});

var ToolList = React.createClass({
	render: function() {
		var tools = this.props.data.map(function(tool) {
			return (
				<Tool key={tool.id} link={tool.link} name={tool.name} />
			);
		});
		return (
			<div className="toolList">
				{tools}
			</div>
		);
	}
});

var Tool = React.createClass({
	render: function() {
		return (
			<div className="col-sm-6 col-md-6">
				<a href={this.props.link} className="thumbnail">
					<div className="caption">
						<h3>{this.props.name}</h3>
					</div>
				</a>
			</div>
		);
	}
});

ReactDOM.render(
	<ToolBox url="api/tools" />,
	document.getElementById('content')
);