import React, { Component } from 'react';

import agencyService from '../../service/agencyService';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';

 

export default class JobPostDesc extends Component {
   
    constructor(props){

        super(props)

        this.state={
            
            jobs: []

        }

    }

    componentDidMount(){
        //const jobid=2;
        agencyService.getAlljobs().then((res) => {

            this.setState({jobs:res.data});

        })

    }
    

  render() {

    return (
    
        <div>
          <Navbar/>
        <div className="container mt-5">
          
      <div className="row">
        {this.state.jobs.map(job =>  (
            
          <div className="col-lg-4 col-md-6 mb-4" key={job.id}>
           
             <div className="card">

  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
   <div className="card-body">
     <h5 className="card-title" style={{color:"blue"}}>{job.jobtype}</h5>
     <hr/>
     <p className="card-text">
       
     <b>No of Employee</b>:{job.noofemp}  <br/>
         <b>Qualification</b>:{job.qualification}  <br/>
         <b>Salary</b>:{job.salary}  <br/>
         <b>Time Period</b>:{job.type_period}  <br/>
         
         
      

     </p>
     <Link to={{
              pathname: "/jobPosts",
              state: { jobId: job.id },
            }} style={{ textDecoration: 'none'}}> Know More</Link>
            
   </div>
 
</div>

          </div>
          
        ))}
      </div>
    </div>
   
    </div>
    )

  }

}