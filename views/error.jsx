var React = require("react");

class HelloMessage extends React.Component {
  render() {
    const { error, message } = this.props;
    return (
      <div className="container">
        <div className="row">
          <h1>Error 500!!</h1>
          <h2>{message}</h2>
          <h3>{error.status}</h3>
          <pre>{error.stack}</pre>
        </div>
      </div>
    );
  }
}

module.exports = HelloMessage;
