import React, { Component } from 'react';
import ApiService from "../service/agencyService";
import Swal from "sweetalert2";
import Navbar from './navbar';
import { Container } from 'react-bootstrap';

class JobReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
        jobtype: '',
        noofemp: '',
        jobdesc: '',
        qualification:'',
        type_period:'',
        salary:'',
        userid:'',
        message:null,
      // Other fields...
    };
    this.addjobReqs = this.addjobReqs.bind(this);
  }

 

  addjobReqs = (event) => {
    event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('loginDetails'));
    let jobReq = {
       
        jobtype:this.state.jobtype,
        noofemp: this.state.noofemp,
        jobdesc: this.state.jobdesc,
        qualification:this.state.qualification,
        type_period:this.state.type_period,
        salary:this.state.salary,
        userid:storedUser.userId,
      };

      //alert(this.state.userid);
    ApiService.addJobReq(jobReq)
      .then((resp) => {
        this.setState({ message: "Job Requirement added successfully." });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: this.state.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.props.history.push("/");
      }) .catch((err) => {
        alert("something wrong");
        this.props.history.push("/JobPost");
      });
    // Redirect user to login or other page
  
  }
   handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div className="row">
        <Navbar/>
      <div className="col-4">
        
      </div>
      <div className="col-5 pt-3">
        <div
          className="m-4 p-4 border"
          style={{
            height: "500px",
            width:"400px",
            boxShadow:
              " 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.404)",
          }}
        >
        <h2>Job Post</h2>
        <hr></hr>
       
        <form onSubmit={this.addjobReqs} style={{height: "120px" }}>
        
          
          <div className="form-group">
          <label>Job Type:</label><br/>
             <input
              type="text"
              name="jobtype"
              value={this.state.jobtype}
              onChange={this.handleInputChange}
              required
              style={{width: "100%" }} />
          </div>
          
          
          <div className="form-group">
            <label>Number of Employee:</label><br/>
            <input
              type="noofemp"
              name="noofemp"
              value={this.state.noofemp}
              onChange={this.handleInputChange}
              required
              style={{width: "100%" }} />
          </div>
          <div className="form-group">
            <label>Salary:</label><br/>
            <input
              type="salary"
              name="salary"
              value={this.state.salary}
              onChange={this.handleInputChange}
              required
              style={{width: "100%" }}/>
          </div>
          <div className="form-group">
            <label>Qualification:</label><br/>
            <input
              type="qualification"
              name="qualification"
              value={this.state.qualification}
              onChange={this.handleInputChange}
              required
              style={{width: "100%" }} />
          </div>
          <div className="form-group">
            <label>Time Period:</label><br/>
            <input
              type="type_period"
              name="type_period"
              value={this.state.type_period}
              onChange={this.handleInputChange}
              required
              style={{width: "100%" }} />
          </div>
          <div className="form-group">
            <label>Job Description:</label><br/>
            <textarea
              type="jobdesc"
              name="jobdesc"
              value={this.state.jobdesc}
              onChange={this.handleInputChange}
              required
            style={{
                width: "100%",
                height: "50px",
                padding: "12px 20px",
                // box-sizing: "border-box";
                border: "2px solid #ccc",
                borderradius: "4px",
                bgcolor: "#f8f8f8",
                fontsize: "16px",
                // resize: none,
            }}/>
          </div>
           
          <button type="submit" className="btn btn-success mt-3">Add</button>
          
        </form>
   
      </div>
      </div>
      </div>
    );
  }

}

export default JobReq;
