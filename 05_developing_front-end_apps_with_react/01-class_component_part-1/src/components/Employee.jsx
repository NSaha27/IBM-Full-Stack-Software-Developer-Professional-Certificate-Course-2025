import React, { Component } from "react";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = { empName: "", empPhone: "", empEmail: "" };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { empName, empPhone, empEmail } = this.state;
    return (
      <div>
        <h1>Save Employee Details</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="">Name </label>
              </td>
              <td>
                <input
                  type="text"
                  name="empName"
                  id="empName"
                  value={empName}
                  onChange={this.handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Phone no. </label>
              </td>
              <td>
                <input
                  type="text"
                  name="empPhone"
                  id="empPhone"
                  value={empPhone}
                  onChange={this.handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Email ID </label>
              </td>
              <td>
                <input
                  type="email"
                  name="empEmail"
                  id="empEmail"
                  value={empEmail}
                  onChange={this.handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button
                  onClick={() =>
                    alert(
                      `Employee details:\nName: ${empName}\nPhone no.: ${empPhone}\nEmail ID: ${empEmail}`,
                    )
                  }
                >
                  Check Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employee;
