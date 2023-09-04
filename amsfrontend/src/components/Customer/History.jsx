import React, { Component } from 'react';

import agencyService from '../../service/agencyService';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import SearchJobPost from './SearchJobPost';

 

export default class History extends Component {
   
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
         
          <h1 style={{color:"black",textAlign:"center"}} >Job Post</h1>
        
          <hr/>
          <SearchJobPost/>
        <div className="container mt-5">
          
      <div className="row">
        {this.state.jobs.map(job =>  (
            
          <div className="col-lg-4 col-md-6 mb-4" key={job.id}>
           
            
             <div className="card">

  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
   <div className="card-body">
     <h5 className="card-title" style={{color:"blue"}}>{job.jobtype}</h5><hr/>
     <p className="card-text">
       
     <b>No of Employee</b>:{job.noofemp}  <br/>
         <b>Qualification</b>:{job.qualification}  <br/>
         <b>Salary</b>:{job.salary}  <br/>
         <b>Time Period</b>:{job.type_period}  <br/>
      

     </p>
     <Link to={{
              pathname: "/selectemp",
              state: { jobId: job.id },
            }} style={{ textDecoration: 'none'}}>See Response</Link>
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