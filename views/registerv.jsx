var React = require("react");
var DefaultLayout = require("./layouts/layout");

class IndexPage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-8 card bg-dark text-light">
              <form className="card-body ">
                <h3 className="card-title">Vehicle Registration Form</h3>
                <div className="form-row">
                  <div className="col-md-4 bordered">
                    <img
                      src="/images/person.png"
                      className="rounded float-left img-thumbnail bg-dark"
                      alt="Profile Image"
                      width="200"
                      height="200"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-12 mb-3">
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
                        <label htmlFor="validationServer02">
                          Email Address
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="validationServer02"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="col-md-8 mb-3 ml-3 mr-3">
                        <input
                          type="file"
                          className="custom-file-input form-control "
                          id="customFile"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row mt-2 ">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationServer03">City</label>
                    <input
                      type="text"
                      className="form-control "
                      id="validationServer03"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationServer04">State</label>
                    <input
                      type="text"
                      className="form-control "
                      id="validationServer04"
                      placeholder="State"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationServer05">
                      Vehicle Plate Number
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="validationServer05"
                      placeholder="Vehicle Plate Number"
                      required
                    />
                  </div>
                </div>

                <a className="btn btn-danger ml-2 float-right mt-2" href="/">
                  Cancel
                </a>
                <button
                  className="btn btn-primary float-right mt-2"
                  type="submit"
                >
                  Submit form
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
