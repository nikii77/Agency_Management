import React from "react";
import { Component } from "react";
import agencyService from '../../service/agencyService';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import Navbar from '../navbar';


class ProductDetail extends Component {
  state = {
    job: {
        id:-1,
        jobtype: '',
        noofemp: '',
        jobdesc: '',
        qualification:'',
        type_period:'',
        salary:'',
        userid:'',
    },
  };

  componentDidMount() {
    const jobId = this.props.location.state.jobId;

    agencyService.getjobsbyId(jobId).then((response) => {
      this.setState({ job: response.data });
    });
  }

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
            boxShadow:
              " 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.404)",
          }}
        >
    <div className="card">

  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
   <div className="card-body">
     <h5 className="card-title">{this.state.job.jobtype}</h5>
     <hr></hr>
     <p className="card-text">
        {/* userid:{this.state.job.userid}<br/> */}
         <b>No of Employee</b>:{this.state.job.noofemp}  <br/>
         <b>Qualification</b>:{this.state.job.qualification}  <br/>
         <b>Salary</b>:{this.state.job.salary}  <br/>
         <b>Time Period</b>:{this.state.job.type_period}  <br/>
         <b>Description</b>:{this.state.job.jobdesc}  <br/>
         
        

     </p>
     {/* <a href="#" className="btn btn-primary">Apply</a> */}
       <Link to={{
                          pathname: "/employeeList",
                          state: { userId: this.state.job.userid,
                                 jobId:this.state.job.id
                          },
                        }}>Apply</Link>  
     {/* <button onClick="/login">Apply</button> */}
   </div>
 
</div>
</div>
        </div>
      </div>
          
    );
  }
}
export default ProductDetail;
