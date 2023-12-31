import React from "react";
import { Link } from "react-router-dom";

function CreateCustomer(props) {
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
              '\nbody {\n\tcolor: #566787;\n\tbackground: #f5f5f5;\n\tfont-family: \'Varela Round\', sans-serif;\n\tfont-size: 13px;\n}\n.table-responsive {\n    margin: 30px 0;\n}\n.table-wrapper {\n\tbackground: #fff;\n\tpadding: 20px 25px;\n\tborder-radius: 3px;\n\tmin-width: 1000px;\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.table-title {        \n\tpadding-bottom: 15px;\n\tbackground: #435d7d;\n\tcolor: #fff;\n\tpadding: 16px 30px;\n\tmin-width: 100%;\n\tmargin: -20px -25px 10px;\n\tborder-radius: 3px 3px 0 0;\n}\n.table-title h2 {\n\tmargin: 5px 0 0;\n\tfont-size: 24px;\n}\n.table-title .btn-group {\n\tfloat: right;\n}\n.table-title .btn {\n\tcolor: #fff;\n\tfloat: right;\n\tfont-size: 13px;\n\tborder: none;\n\tmin-width: 50px;\n\tborder-radius: 2px;\n\tborder: none;\n\toutline: none !important;\n\tmargin-left: 10px;\n}\n.table-title .btn i {\n\tfloat: left;\n\tfont-size: 21px;\n\tmargin-right: 5px;\n}\n.table-title .btn span {\n\tfloat: left;\n\tmargin-top: 2px;\n}\ntable.table tr th, table.table tr td {\n\tborder-color: #e9e9e9;\n\tpadding: 12px 15px;\n\tvertical-align: middle;\n}\ntable.table tr th:first-child {\n\twidth: 60px;\n}\ntable.table tr th:last-child {\n\twidth: 100px;\n}\ntable.table-striped tbody tr:nth-of-type(odd) {\n\tbackground-color: #fcfcfc;\n}\ntable.table-striped.table-hover tbody tr:hover {\n\tbackground: #f5f5f5;\n}\ntable.table th i {\n\tfont-size: 13px;\n\tmargin: 0 5px;\n\tcursor: pointer;\n}\t\ntable.table td:last-child i {\n\topacity: 0.9;\n\tfont-size: 22px;\n\tmargin: 0 5px;\n}\ntable.table td a {\n\tfont-weight: bold;\n\tcolor: #566787;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\toutline: none !important;\n}\ntable.table td a:hover {\n\tcolor: #2196F3;\n}\ntable.table td a.edit {\n\tcolor: #FFC107;\n}\ntable.table td a.delete {\n\tcolor: #F44336;\n}\ntable.table td i {\n\tfont-size: 19px;\n}\ntable.table .avatar {\n\tborder-radius: 50%;\n\tvertical-align: middle;\n\tmargin-right: 10px;\n}\n.pagination {\n\tfloat: right;\n\tmargin: 0 0 5px;\n}\n.pagination li a {\n\tborder: none;\n\tfont-size: 13px;\n\tmin-width: 30px;\n\tmin-height: 30px;\n\tcolor: #999;\n\tmargin: 0 2px;\n\tline-height: 30px;\n\tborder-radius: 2px !important;\n\ttext-align: center;\n\tpadding: 0 6px;\n}\n.pagination li a:hover {\n\tcolor: #666;\n}\t\n.pagination li.active a, .pagination li.active a.page-link {\n\tbackground: #03A9F4;\n}\n.pagination li.active a:hover {        \n\tbackground: #0397d6;\n}\n.pagination li.disabled i {\n\tcolor: #ccc;\n}\n.pagination li i {\n\tfont-size: 16px;\n\tpadding-top: 6px\n}\n.hint-text {\n\tfloat: left;\n\tmargin-top: 10px;\n\tfont-size: 13px;\n}    \n/* Custom checkbox */\n.custom-checkbox {\n\tposition: relative;\n}\n.custom-checkbox input[type="checkbox"] {    \n\topacity: 0;\n\tposition: absolute;\n\tmargin: 5px 0 0 3px;\n\tz-index: 9;\n}\n.custom-checkbox label:before{\n\twidth: 18px;\n\theight: 18px;\n}\n.custom-checkbox label:before {\n\tcontent: \'\';\n\tmargin-right: 10px;\n\tdisplay: inline-block;\n\tvertical-align: text-top;\n\tbackground: white;\n\tborder: 1px solid #bbb;\n\tborder-radius: 2px;\n\tbox-sizing: border-box;\n\tz-index: 2;\n}\n.custom-checkbox input[type="checkbox"]:checked + label:after {\n\tcontent: \'\';\n\tposition: absolute;\n\tleft: 6px;\n\ttop: 3px;\n\twidth: 6px;\n\theight: 11px;\n\tborder: solid #000;\n\tborder-width: 0 3px 3px 0;\n\ttransform: inherit;\n\tz-index: 3;\n\ttransform: rotateZ(45deg);\n}\n.custom-checkbox input[type="checkbox"]:checked + label:before {\n\tborder-color: #03A9F4;\n\tbackground: #03A9F4;\n}\n.custom-checkbox input[type="checkbox"]:checked + label:after {\n\tborder-color: #fff;\n}\n.custom-checkbox input[type="checkbox"]:disabled + label:before {\n\tcolor: #b8b8b8;\n\tcursor: auto;\n\tbox-shadow: none;\n\tbackground: #ddd;\n}\n/* Modal styles */\n.modal .modal-dialog {\n\tmax-width: 400px;\n}\n.modal .modal-header, .modal .modal-body, .modal .modal-footer {\n\tpadding: 20px 30px;\n}\n.modal .modal-content {\n\tborder-radius: 3px;\n\tfont-size: 14px;\n}\n.modal .modal-footer {\n\tbackground: #ecf0f1;\n\tborder-radius: 0 0 3px 3px;\n}\n.modal .modal-title {\n\tdisplay: inline-block;\n}\n.modal .form-control {\n\tborder-radius: 2px;\n\tbox-shadow: none;\n\tborder-color: #dddddd;\n}\n.modal textarea.form-control {\n\tresize: vertical;\n}\n.modal .btn {\n\tborder-radius: 2px;\n\tmin-width: 100px;\n}\t\n.modal form label {\n\tfont-weight: normal;\n}\t\n',
          }}
        />
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Create <b>Customer</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i>{" "}
                      <span>Create Customer</span>
                    </a>
                    <a className="btn btn-danger" data-toggle="modal">
                      <i className="material-icons"></i>
                      <span>
                        <Link to={"/customer"}>Back To Menu</Link>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Họ tên, Ngày sinh, Giới tính, Số CMND, Số Điện Thoại, Email, Loại khách, Địa chỉ  */}
              <table>
                {/* Name */}
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <label htmlFor="serviceName">Name</label>
                    </td>
                    <td>
                      <input id="serviceName" />
                    </td>
                  </tr>
                  {/* Birth Day */}
                  <tr>
                    <td>
                      {" "}
                      <label htmlFor="usableArea">Birth Day</label>
                    </td>
                    <td>
                      <input id="usableArea" />
                    </td>
                  </tr>
                  {/* Gender */}
                  <tr>
                    <td>
                      {" "}
                      <label htmlFor="rentalFee">Gender</label>
                    </td>
                    <td>
                      <input id="rentalFee" />
                    </td>
                  </tr>
                  {/* Citizen Id */}
                  <tr>
                    <td>
                      {" "}
                      <label htmlFor="quantity">Citizen Id</label>
                    </td>
                    <td>
                      <input id="quantity" />
                    </td>
                  </tr>
                  {/* Number Phone */}
                  <tr>
                    <td>
                      {" "}
                      <label htmlFor="rentalType">Number Phone</label>
                    </td>
                    <td>
                      <input id="rentalType" />
                    </td>
                  </tr>
                  {/* Email */}
                  <tr>
                    <td>
                      {" "}
                      <label htmlFor="rentalType">Email</label>
                    </td>
                    <td>
                      <input id="rentalType" />
                    </td>
                  </tr>
                  {/* Customer Type */}
                  <tr>
                    <td>
                      {" "}
                      <label htmlFor="rentalType">Customer Type</label>
                    </td>
                    <td>
                      <input id="rentalType" />
                    </td>
                  </tr>
                  {/* Address */}
                  <tr>
                    <td>
                      {" "}
                      <label htmlFor="rentalType">Address</label>
                    </td>
                    <td>
                      <input id="rentalType" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Create Modal HTML */}
        {/* Họ tên, Ngày sinh, Giới tính, Số CMND, Số Điện Thoại, Email, Loại khách, Địa chỉ  */}
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Add Customer</h4>
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
                  {/* Name					 */}
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* Birth Day */}
                  <div className="form-group">
                    <label>Birth Day</label>
                    <input type="email" className="form-control" required="" />
                  </div>
                  {/* Gender */}
                  <div className="form-group">
                    <label>Gender</label>
                    <textarea
                      className="form-control"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  {/* Citizen Id */}
                  <div className="form-group">
                    <label>Citizen Id</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* Number Phone */}
                  <div className="form-group">
                    <label>Number Phone</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* Email */}
                  <div className="form-group">
                    <label>Customer Type</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* Address */}
                  <div className="form-group">
                    <label>Address</label>
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
        {/* Họ tên, Ngày sinh, Giới tính, Số CMND, Số Điện Thoại, Email, Loại khách, Địa chỉ  */}
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Customer</h4>
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
                  {/* name				 */}
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* Birth Day */}
                  <div className="form-group">
                    <label>Birth Day</label>
                    <input type="email" className="form-control" required="" />
                  </div>
                  {/* Gender */}
                  <div className="form-group">
                    <label>Gender</label>
                    <textarea
                      className="form-control"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  {/* Citizen Id */}
                  <div className="form-group">
                    <label>Citizen Id</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* Number Phone				 */}
                  <div className="form-group">
                    <label>Number Phone</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* Email */}
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* Customer Type */}
                  <div className="form-group">
                    <label>Customer Type</label>
                    <input type="text" className="form-control" required="" />
                  </div>
                  {/* Address */}
                  <div className="form-group">
                    <label>Address</label>
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
                    className="btn btn-info"
                    defaultValue="Save"
                  />
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
                  <h4 className="modal-title">Delete Customer</h4>
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

export default CreateCustomer;
