var React = require("react");
var DefaultLayout = require("./layouts/adminLayout");

class AdminPage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        
        <div className="container">
          <h3>Admin</h3>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = AdminPage;
