import React, { Component } from "react";
import ApiService from "../service/agencyService";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from './navbar';

class changePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
       newPassword:'',
       confirmNewPassword:'',
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changePassword = async (e) => {
    e.preventDefault();
    const { newPassword, confirmNewPassword } = this.state;
    const { userEmail } = this.props.location.state;
    //alert("user email:"+userEmail);
    if (newPassword !== confirmNewPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure your passwords match",
      });
      return;
    }
    
   // alert(userEmail);

    try {
      // Make an API call to change the password
      const response = await axios.get(`http://localhost:8080/api/changepassword?email=${userEmail}&newPassword=${newPassword}`);
      //alert(response.data);
      if (response.data === "success") {
        Swal.fire({
          icon: "success",
          title: "Password changed successfully",
          showConfirmButton: false,
        });
        
        // Redirect to login page or any other page as needed
        this.props.history.push("/login");
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Password is not changed...something went wrong ",
          showConfirmButton: false,
        });
        
        // Redirect to login page or any other page as needed
        this.props.history.push("/forget");

      }
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };


 
  render() {
   
    return (
     <div>
       <Navbar/>
       <div className="row">
        <div className="col-5 offset-1 pt-3">
          <div
            className="m-4 p-4 border"
            style={{
              boxShadow:
                "2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.404)",
            }}
          >
            <h2 className="text-center">Change Password</h2>
            <form>
              <div className="form-group">
                <label htmlFor="newPassword">New Password:</label>
                <input
                  id="newPassword"
                  type="password"
                  placeholder="Enter new password"
                  name="newPassword"
                  className="form-control"
                  value={this.state.newPassword}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmNewPassword">Confirm New Password:</label>
                <input
                  id="confirmNewPassword"
                  type="password"
                  placeholder="Confirm new password"
                  name="confirmNewPassword"
                  className="form-control"
                  value={this.state.confirmNewPassword}
                  onChange={this.onChange}
                />
              </div>

              <button className="btn btn-primary mt-2" onClick={this.changePassword}>
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default changePassword 
    ;
