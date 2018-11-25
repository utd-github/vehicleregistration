var React = require("react");
var DefaultLayout = require("./layouts/layout");

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-s8 mt-5 card bg-dark text-light ">
              <form className="card-body">
                <h3 className="card-title">Login</h3>

                <div className="form-row">
                  <div className="form-group col-12">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="inputPassword4">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-row justify-content-center">
                  <button type="submit" className="col-4 btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
