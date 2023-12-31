import React from 'react';
import{Link}from 'react-router-dom';

function CustomerList(props) {
    return (
        <div>
            <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <title>Bootstrap CRUD Data Table for Database with Modal Form</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody {\n\tcolor: #566787;\n\tbackground: #f5f5f5;\n\tfont-family: \'Varela Round\', sans-serif;\n\tfont-size: 13px;\n}\n.table-responsive {\n    margin: 30px 0;\n}\n.table-wrapper {\n\tbackground: #fff;\n\tpadding: 20px 25px;\n\tborder-radius: 3px;\n\tmin-width: 1000px;\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.table-title {        \n\tpadding-bottom: 15px;\n\tbackground: #435d7d;\n\tcolor: #fff;\n\tpadding: 16px 30px;\n\tmin-width: 100%;\n\tmargin: -20px -25px 10px;\n\tborder-radius: 3px 3px 0 0;\n}\n.table-title h2 {\n\tmargin: 5px 0 0;\n\tfont-size: 24px;\n}\n.table-title .btn-group {\n\tfloat: right;\n}\n.table-title .btn {\n\tcolor: #fff;\n\tfloat: right;\n\tfont-size: 13px;\n\tborder: none;\n\tmin-width: 50px;\n\tborder-radius: 2px;\n\tborder: none;\n\toutline: none !important;\n\tmargin-left: 10px;\n}\n.table-title .btn i {\n\tfloat: left;\n\tfont-size: 21px;\n\tmargin-right: 5px;\n}\n.table-title .btn span {\n\tfloat: left;\n\tmargin-top: 2px;\n}\ntable.table tr th, table.table tr td {\n\tborder-color: #e9e9e9;\n\tpadding: 12px 15px;\n\tvertical-align: middle;\n}\ntable.table tr th:first-child {\n\twidth: 60px;\n}\ntable.table tr th:last-child {\n\twidth: 100px;\n}\ntable.table-striped tbody tr:nth-of-type(odd) {\n\tbackground-color: #fcfcfc;\n}\ntable.table-striped.table-hover tbody tr:hover {\n\tbackground: #f5f5f5;\n}\ntable.table th i {\n\tfont-size: 13px;\n\tmargin: 0 5px;\n\tcursor: pointer;\n}\t\ntable.table td:last-child i {\n\topacity: 0.9;\n\tfont-size: 22px;\n\tmargin: 0 5px;\n}\ntable.table td a {\n\tfont-weight: bold;\n\tcolor: #566787;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\toutline: none !important;\n}\ntable.table td a:hover {\n\tcolor: #2196F3;\n}\ntable.table td a.edit {\n\tcolor: #FFC107;\n}\ntable.table td a.delete {\n\tcolor: #F44336;\n}\ntable.table td i {\n\tfont-size: 19px;\n}\ntable.table .avatar {\n\tborder-radius: 50%;\n\tvertical-align: middle;\n\tmargin-right: 10px;\n}\n.pagination {\n\tfloat: right;\n\tmargin: 0 0 5px;\n}\n.pagination li a {\n\tborder: none;\n\tfont-size: 13px;\n\tmin-width: 30px;\n\tmin-height: 30px;\n\tcolor: #999;\n\tmargin: 0 2px;\n\tline-height: 30px;\n\tborder-radius: 2px !important;\n\ttext-align: center;\n\tpadding: 0 6px;\n}\n.pagination li a:hover {\n\tcolor: #666;\n}\t\n.pagination li.active a, .pagination li.active a.page-link {\n\tbackground: #03A9F4;\n}\n.pagination li.active a:hover {        \n\tbackground: #0397d6;\n}\n.pagination li.disabled i {\n\tcolor: #ccc;\n}\n.pagination li i {\n\tfont-size: 16px;\n\tpadding-top: 6px\n}\n.hint-text {\n\tfloat: left;\n\tmargin-top: 10px;\n\tfont-size: 13px;\n}    \n/* Custom checkbox */\n.custom-checkbox {\n\tposition: relative;\n}\n.custom-checkbox input[type="checkbox"] {    \n\topacity: 0;\n\tposition: absolute;\n\tmargin: 5px 0 0 3px;\n\tz-index: 9;\n}\n.custom-checkbox label:before{\n\twidth: 18px;\n\theight: 18px;\n}\n.custom-checkbox label:before {\n\tcontent: \'\';\n\tmargin-right: 10px;\n\tdisplay: inline-block;\n\tvertical-align: text-top;\n\tbackground: white;\n\tborder: 1px solid #bbb;\n\tborder-radius: 2px;\n\tbox-sizing: border-box;\n\tz-index: 2;\n}\n.custom-checkbox input[type="checkbox"]:checked + label:after {\n\tcontent: \'\';\n\tposition: absolute;\n\tleft: 6px;\n\ttop: 3px;\n\twidth: 6px;\n\theight: 11px;\n\tborder: solid #000;\n\tborder-width: 0 3px 3px 0;\n\ttransform: inherit;\n\tz-index: 3;\n\ttransform: rotateZ(45deg);\n}\n.custom-checkbox input[type="checkbox"]:checked + label:before {\n\tborder-color: #03A9F4;\n\tbackground: #03A9F4;\n}\n.custom-checkbox input[type="checkbox"]:checked + label:after {\n\tborder-color: #fff;\n}\n.custom-checkbox input[type="checkbox"]:disabled + label:before {\n\tcolor: #b8b8b8;\n\tcursor: auto;\n\tbox-shadow: none;\n\tbackground: #ddd;\n}\n/* Modal styles */\n.modal .modal-dialog {\n\tmax-width: 400px;\n}\n.modal .modal-header, .modal .modal-body, .modal .modal-footer {\n\tpadding: 20px 30px;\n}\n.modal .modal-content {\n\tborder-radius: 3px;\n\tfont-size: 14px;\n}\n.modal .modal-footer {\n\tbackground: #ecf0f1;\n\tborder-radius: 0 0 3px 3px;\n}\n.modal .modal-title {\n\tdisplay: inline-block;\n}\n.modal .form-control {\n\tborder-radius: 2px;\n\tbox-shadow: none;\n\tborder-color: #dddddd;\n}\n.modal textarea.form-control {\n\tresize: vertical;\n}\n.modal .btn {\n\tborder-radius: 2px;\n\tmin-width: 100px;\n}\t\n.modal form label {\n\tfont-weight: normal;\n}\t\n'
    }}
  />
  <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                Customer <b>List</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <a
           
                className="btn btn-success"
                data-toggle="modal"
              >
                <i className="material-icons"></i>{" "}
            
                <span><Link to={'/customer/new'}>Add New Customer</Link></span>
              </a>
              <a
                href="#deleteEmployeeModal"
                className="btn btn-danger"
                data-toggle="modal"
              >
                <i className="material-icons"></i>
                 <span>Delete</span>
              </a>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <span className="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label htmlFor="selectAll" />
                </span>
                {/* Họ tên, Ngày sinh, Giới tính, Số CMND, Số Điện Thoại, Email, Loại khách, Địa chỉ  */}
              </th>
              <th> Name</th>
              <th>Birth Day</th>
              <th>Gender</th>
              <th>Citizen Id</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Customer Type</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox1" />
                </span>
              </td>
              <td>Thomas Hardy</td>
              <td>thomashardy@mail.com</td>
              <td>89 Chiaroscuro Rd, Portland, USA</td>
              <td>(171) 555-2222</td>
              <td />
              <td />
              <td />
              <td />
              <td>
                <a
                  href="#editEmployeeModal"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox2" />
                </span>
              </td>
              <td>Dominique Perrier</td>
              <td>dominiqueperrier@mail.com</td>
              <td>Obere Str. 57, Berlin, Germany</td>
              <td>(313) 555-5735</td>
              <td />
              <td />
              <td />
              <td />
              <td>
                <a
                  href="#editEmployeeModal"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox3"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox3" />
                </span>
              </td>
              <td>Maria Anders</td>
              <td>mariaanders@mail.com</td>
              <td>25, rue Lauriston, Paris, France</td>
              <td>(503) 555-9931</td>
              <td />
              <td />
              <td />
              <td />
              <td>
                <a
                  href="#editEmployeeModal"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox4"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox4" />
                </span>
              </td>
              <td>Fran Wilson</td>
              <td>franwilson@mail.com</td>
              <td>C/ Araquil, 67, Madrid, Spain</td>
              <td>(204) 619-5731</td>
              <td />
              <td />
              <td />
              <td />
              <td>
                <a
                  href="#editEmployeeModal"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox5"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox5" />
                </span>
              </td>
              <td>Martin Blank</td>
              <td>martinblank@mail.com</td>
              <td>Via Monte Bianco 34, Turin, Italy</td>
              <td>(480) 631-2097</td>
              <td />
              <td />
              <td />
              <td />
              <td>
                <a
                  href="#editEmployeeModal"
                  className="edit"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
                <a
                  href="#deleteEmployeeModal"
                  className="delete"
                  data-toggle="modal"
                >
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Delete"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">
            Showing <b>5</b> out of <b>25</b> entries
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="#">Previous</a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Edit Modal HTML */}
  <div id="addEmployeeModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Add Employee</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" required="" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" required="" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                className="form-control"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" className="form-control" required="" />
            </div>
          </div>
          <div className="modal-footer">
            <input
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              defaultValue="Cancel"
            />
            <input
              type="submit"
              className="btn btn-success"
              defaultValue="Add"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Edit Modal HTML */}
  <div id="editEmployeeModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Edit Employee</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" required="" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" required="" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                className="form-control"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" className="form-control" required="" />
            </div>
          </div>
          <div className="modal-footer">
            <input
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              defaultValue="Cancel"
            />
            <input type="submit" className="btn btn-info" defaultValue="Save" />
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Delete Modal HTML */}
  <div id="deleteEmployeeModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Delete Employee</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete these Records?</p>
            <p className="text-warning">
              <small>This action cannot be undone.</small>
            </p>
          </div>
          <div className="modal-footer">
            <input
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              defaultValue="Cancel"
            />
            <input
              type="submit"
              className="btn btn-danger"
              defaultValue="Delete"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</>

        </div>
    );
}

export default CustomerList;