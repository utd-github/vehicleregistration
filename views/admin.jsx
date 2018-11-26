var React = require("react");
var DefaultLayout = require("./layouts/adminLayout");

class AdminPage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="container">
          <div className="row">
            <div className="col-2 mt-5 card" style={{ height: 550 }}>
              <ul className="nav flex-column card-body ">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-10">
              <div className="row justify-content-end">
                <div className="col-4">
                  <form className="form-inline">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-primary my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 " style={{ minHeight: 500 }}>
                  <table className="table table-hover table-bordered bg-light text-dark">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>Mark</td>
                        <td>+25290xxxxxxx</td>
                        <td>@mdo</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="row justify-content-center">
                    <div className="col-4">
                      <nav aria-label="..." className="bg-dark text-light">
                        <ul className="pagination justify-content-center ">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">&laquo;</span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = AdminPage;
