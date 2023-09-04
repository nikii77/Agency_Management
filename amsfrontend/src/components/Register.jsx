import React, { Component } from "react";
import ApiService from "../service/agencyService";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from './navbar';

class Registerss extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
        mobile:'',
        role:'',
        agencyid:0,

        message:null,
      formErrors: {},
    };

    this.saveUser = this.saveUser.bind(this);
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onValueChange = (event) =>
  this.setState({
    role: event.target.value,
  });


  handleFormValidation() {
    const {
        name,
        email,
        password,
        mobile,
        role,
        agencyid
    } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //first name
    if (!name) {
      formIsValid = false;
      formErrors["firstNameErr"] = "*Name is required.";
    } else if (!/^[a-zA-Z ]{2,30}$/.test(name)) {
      formIsValid = false;
      formErrors["firstNameErr"] = "*Invalid Firstname.";
    }
   
   

   

    //Email
    if (!email) {
      formIsValid = false;
      formErrors["emailIdErr"] = "*Email id is required.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      formErrors["emailIdErr"] = "*Invalid email id.";
    }

    //password
    if (!password) {
      formIsValid = false;
      formErrors["passwordErr"] = "*password is required";
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)
    ) {
      formIsValid = false;
      formErrors["passwordErr"] =
        "*password should contain atleast one special char and number.";
    }

    //Phone number
    if (!mobile) {
      formIsValid = false;
      formErrors["phoneNoErr"] = "*Phone number is required.";
    } else {
      var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
      if (!mobPattern.test(mobile)) {
        formIsValid = false;
        formErrors["phoneNoErr"] = "*Invalid phone number.";
      }
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  saveUser = (event) => {
    event.preventDefault();

    let user = {
       
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        mobile:this.state.mobile,
        role:this.state.role,
        agencyid:this.state.agencyid
      };

      if (this.handleFormValidation()) {
    ApiService.addUser(user)
      .then((resp) => {
        this.setState({ message: "User added successfully." });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: this.state.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.props.history.push("/login");
      }) .catch((err) => {
        alert("something wrong");
        this.props.history.push("/Register");
      });
    }
    // Redirect user to login or other page
  
  };
  render() {
    const {
      firstNameErr,
      passwordErr,

      emailIdErr,
      phoneNoErr,
     
    } = this.state.formErrors;
    return (
     <div>
        <Navbar/> 
      <div className=" row d-flex flex-row flex-wrap-reverse">
        
        <div className="col-4">
      
          {/* <h2 className="text-center display-2">Register User</h2> */}
        </div>
        <div className="col-5 pt-3">
       
          <div
            className="m-4 p-4 border"
            style={{
              height: "700px",
              boxShadow:
                " 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.404)",
            }}
          >
            <h2 className="text-center">Registration form</h2>
            <form className="">
              {/* <div className="d-flex flex-wrap justify-content-between"> */}
                <div className="form-group" >
                  <label className="mt-4">
                    <span className="text-danger">*</span>Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className={
                      firstNameErr ? "form-control showError" : "form-control"
                    }
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {firstNameErr && (
                    <div
                      className="text-start"
                      style={{
                        color: "red",

                        fontSize: "12px",
                      }}
                    >
                      {firstNameErr}
                    </div>
                  )}
                </div>
                
              {/* </div> */}
              

              <div className="form-group">
                <label>
                  <span className="text-danger">*</span>Email id:
                </label>
                <input
                  type="email"
                  placeholder="email id"
                  name="email"
                  className={
                    emailIdErr ? "form-control showError" : "form-control"
                  }
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {emailIdErr && (
                  <div
                    className="text-start"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {emailIdErr}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>
                  <span className="text-danger">*</span>Password:
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className={
                    passwordErr ? "form-control showError" : "form-control"
                  }
                  value={this.state.password}
                  onChange={this.onChange}
                />
                {passwordErr && (
                  <div
                    className="text-start"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {passwordErr}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>
                  <span className="text-danger">*</span>Mobile:
                </label>
                <input
                  type="mob"
                  placeholder="Mobile"
                  name="mobile"
                  className={
                    phoneNoErr ? "form-control showError" : "form-control"
                  }
                  value={this.state.mobile}
                  onChange={this.onChange}
                />
                {phoneNoErr && (
                  <div
                    className="text-start"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {phoneNoErr}
                  </div>
                )}
              </div>

              
              <div className="d-flex justify-content-center w-100 my-3 p-2">
                <label className="mx-3">
                  <span className="text-danger">*</span>Role :{" "}
                </label>
                <div class="form-check">
                  <input
                    className="form-check-input mr-5 ml-3"
                    type="radio"
                    name="role"
                    id="i1"
                    value="Agency"
                    // this.state.role === "Agency"|
                    checked={this.state.role === "Agency"}
                    onChange={this.onValueChange}
                  />
                  <label class="form-check-label" htmlFor="i1">
                  Agency
                  </label>
                </div>
                <div className="form-check mx-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="i2"
                    value="customer"
                    checked={this.state.role === "customer"}
                    //checked={this.state.selectedOption === 'show'}
                    onChange={this.onValueChange}
                    
                  />
                  <label class="form-check-label" htmlFor="i2">
                    Customer
                  </label>
                </div>
                
              </div>
              {this.state.role === 'Agency' && (
              <div className="form-group">
                <label>
                  <span className="text-danger">*</span>AgencyId:
                </label>
                <input
                  type="text"
                  placeholder="AgencyId"
                  name="agencyid"
                //   className={
                //     emailIdErr ? "form-control showError" : "form-control"
                //   }
                  value={this.state.agencyid}
                  onChange={this.onChange}
                />
                {/* {emailIdErr && (
                  <div
                    className="text-start"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {emailIdErr}
                  </div>
                )} */}
              </div>
              )
              }
              <button className="btn btn-success mt-2" onClick={this.saveUser}>
                Save
              </button>
              <div className=" mt-2 text-end">
                <Link className="" to="/login">
                  Click here
                </Link>
                <span className="px-2">to login</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Registerss;
