import React, { Component } from 'react';
import ApiService from "../../service/agencyService";
import Swal from "sweetalert2";
import Navbar from '../navbar';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');
class SearchJobPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        jobtype: '',
        message:null,
        jobs:[],
        selectjobs:[],
        isModalOpen: false,
      // Other fields...
    };
    this.searchjobpost = this.searchjobpost.bind(this);
  }
//   componentDidMount(){
//     const storedUser = JSON.parse(localStorage.getItem('loginDetails'));
//     //const jobid=2;
//     //const jobid=storedUser.userId;
//     ApiService.jobrequser(storedUser.userId).then((res) => {

//         this.setState({jobs:res.data});

//     })

// }
 

  searchjobpost = (event) => {
  event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('loginDetails'));
        const jobtype=this.state.jobtype
    ApiService.searchjobpost(storedUser.userId,jobtype).then((res) => {
        this.setState({selectjobs:res.data});
        this.setState({ isModalOpen: true });
        //alert(this.state.jobs[0]);
    });


     
   
  
  }

  
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
   handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="row">
        {/* <Navbar/> */}
       
        {/* className="col-5 pt-3" */}
      <div >
        {/* <div
          className="m-4 p-4 border"
          style={{
            height: "250px",
            width:"500px",
            boxShadow:
              " 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.404)",
          }}
        > */}
        {/* <h2>Search</h2> */}
        {/* <div style={{marginLeft:"700px"}}> */}
        <form onSubmit={this.searchjobpost}  style={{float:"right"}}>
          <div className="form-group"  >
            {/* <b><label>Job Type:</label></b><br/> */}
            <input
              type="text"
              name="jobtype"
              placeholder='Job Type'
              value={this.state.jobtype}
              onChange={this.handleInputChange}
              required
              style={{width: "60%" }} />
            <button type="submit" className="btn btn-success mt-3"style={{padding:"5px",marginLeft:"10px"}}>Search</button>
          </div>
            
          {/* <button type="submit" className="btn btn-success mt-3">Search</button> */}
       
        </form>
       
      </div>
      {/* </div> */}
      {/* <ul>
          {this.state.jobs.map(job => (
            <li key={job.id}>{job.jobtype}</li>
          ))}
        </ul> */}
     {/* <div
     class="modal-dialog modal-sm"></div> */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          >
          <h2>Job Post</h2>
          <div className="row">
        {this.state.selectjobs.map(job =>  (
            
          <div className="col-lg-4 col-md-6 mb-4" key={job.id}>
            
            
             <div className="card">

  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
   <div className="card-body">
     <h5 className="card-title" style={{color:"Blue"}}>{job.jobtype}</h5>
     <hr></hr>
     <p className="card-text" style={{ fontfamily: "Times New Roman"}}>
       
         <b>No of Employee</b>:{job.noofemp}  <br/>
         <b> Qualification</b>:{job.qualification}  <br/>
         <b>Salary</b>:{job.salary}  <br/>
         <b>Description</b>:{job.jobdesc}  <br/>
      

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
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }

}

export default SearchJobPost;
