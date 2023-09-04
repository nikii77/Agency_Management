import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, withRouter } from "react-router-dom";

class VerifyOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      email:"",
    };
  }

  componentDidMount() {
    const isOtpGenerated = localStorage.getItem("isOtpGenerated");
    if (!isOtpGenerated) {
      // Redirect to forgot password page if OTP is not generated
     // this.props.history.push("/forget");
    }
  }

  verifyOTP = async (e) => {
    e.preventDefault();
    const{ email }=this.state;
    const { otp } = this.state;
    
    try {
      const response = await axios.get(
        `http://localhost:8080/api/verifyotp?enteredOtp=${otp}`
        //{ withCredentials: true }
      );
      console.log("otp=");
      console.log(response.data);
      console.log("Response from backend:", response.data);
        //alert("otp="+otp);
        //alert("email="+email);

      if (response.data == "matched" || response.data.result == "matched") {
        // You can show a success message if needed
        Swal.fire({
          icon: "success",
          title: "OTP matched. Redirecting to changepassword...",
          showConfirmButton: true,
        });
        this.props.history.push({
          pathname: "/changepassword",
          state: { userEmail: email },
        });// Redirect to login page
      } else {
        Swal.fire({
          icon: "error",
          title: "OTP not matched. Redirecting to forget password page",
          text: "Please enter the correct OTP",
        });
        this.props.history.push("/forget");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  


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
            <h2 className="text-center">Verify OTP</h2>
            <form>
              <div className="form-group">
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
                <label htmlFor="otp">Enter OTP:</label>
                <input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  name="otp"
                  className="form-control"
                  value={this.state.otp}
                  onChange={this.onChange}

                  // autoComplete="current-password" 
                />
              </div>

              <button className="btn btn-primary mt-2" onClick={this.verifyOTP}>
                Verify OTP
              </button>

              <div className="mt-3 d-flex flex-wrap justify-content-center">
                <div>
                  <Link to="/login">
                    Click here
                  </Link>
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

export default withRouter(VerifyOTP);
