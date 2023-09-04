import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, withRouter } from "react-router-dom";

class CheckEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };  
  }

  checkEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;

    try {
      const response = await axios.get(
        `http://localhost:8080/api/checkemail?email=${email}`
      );
      //alert(response.data);
      console.log(response.data);
      console.log("Response from backend:", response.data);

      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Email exists in the database...send otp to email",
        });

       this.props.history.push("/verifyOtp");
        // this.props.history.push({
        //   pathname: "/verifyOtp",
        //   state: { userEmail: email },
        // });
        
        // this.props.history.push({
        //     pathname: "/changepassword",
        //     state: { userEmail: this.state.email },
        //   });

      } else {
        Swal.fire({
          icon: "error",
          title: "Email does not exist in the database.",
        });
        this.props.history.push("/forget");
      }
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };

  onChange = (e) => this.setState({ email: e.target.value });

  render() {
    return (
      <div className="row">
        <div className="col-5 offset-1 pt-3">
          <div
            className="m-4 p-4 border"
            style={{
              boxShadow:
                "2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.404)",
            }}
          >
            <h2 className="text-center">Forget Password</h2>
            <form>
              <div className="form-group">
                <label >Enter Email:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <button className="btn btn-primary mt-2" onClick={this.checkEmail}>
                Check Email
              </button>

              <div className="mt-3 d-flex flex-wrap justify-content-center">
                <div>
                  <Link to="/login">Click here</Link>
                  <span className="px-2">to login</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CheckEmail);
