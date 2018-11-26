var React = require("react");
var DefaultLayout = require("./layouts/adminlayout");

class IndexPage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-8 card bg-dark text-light">
              <form className="card-body ">
                <h3 className="card-title">New User</h3>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationServer01">Full name</label>
                    <input
                      type="text"
                      className="form-control "
                      id="validationServer01"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationServer02">Phone number</label>
                    <input
                      type="text"
                      className="form-control "
                      id="validationServer02"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationServer02">Email Address</label>
                    <input
                      type="email"
                      className="form-control "
                      id="validationServer02"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div className="form-row mt-2 ">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationServer03">Password</label>
                    <input
                      type="password"
                      className="form-control "
                      id="validationServer03"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationServer04">Confirm Password</label>
                    <input
                      type="password2"
                      className="form-control "
                      id="validationServer04"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>

                <a
                  className="btn btn-danger ml-2 float-right mt-2"
                  href="/admin"
                >
                  Cancel
                </a>
                <button
                  className="btn btn-primary float-right mt-2"
                  type="submit"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = IndexPage;
