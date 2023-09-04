import React, { Component } from 'react'

import agencyService from '../../service/agencyService'
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
 

export default class ListAllJobs extends Component {
   
    constructor(props){

        super(props)

        this.state={
            notifications: []

        }

    }

    componentDidMount(){
        agencyService.getAllNotify().then((res) => {

            this.setState({notifications:res.data});

        })

    }
    // jobPostDesc = (event) => {
    //     event.preventDefault();
    //     this.props.history.push("/jobReqDesc");
    // }

    saveselectedEmp = (empid) => {
      agencyService.updateemployee(empid);
    }




  render() {

    return (

      <div>
         <Navbar/>
         <div style={{width:"500px",marginLeft:"400px"}}>
        <h2 className="text-center">Notifications: </h2>

        <table className="table table-striped table-bordered center" style={  { 
border:" 1px solid black",     
textalign: "center",  
fontsize: "20px" }}>

  <thead>

    <tr>

      <th>id</th>

      <th colSpan={2}>Message</th>
      {/* <th></th> */}
      


    </tr>

  </thead>

  <tbody>

    {

        this.state.notifications.map(

            notification =>

            <tr key={notification.id}>

                <td>{notification.id}</td>

                <td>{notification.message}</td>
               
                
                {/* <input
              type="hidden"
              name="jobid"
              value={notification.jobid}
            /> */}

                {/* <td><button className="btn btn-success mt-3" onClick={this.jobPostDesc}>Display</button></td> */}

              <td>
                {notification.message === 'New job post is posted' && (
                   <Link to={{
                    pathname: "/jobPosts",
                    state: { jobId: notification.jobid},
                  }} style={{ textDecoration: 'none'}}>
                     Show
                   </Link>
                )}

                {notification.message === 'Your employee is selected' && (
                    <Link to={{
                     pathname: "/",
                     state: {},
                   }} onClick={() =>this.saveselectedEmp(notification.empid)} style={{ textDecoration: 'none'}}>
                      Show
                   </Link>
                //   <button onClick={() =>this.saveselectedEmp(notification.empid)}>
                //    Apply
                // </button> 
                )}
              
              </td>

            </tr>

        )

    }

 

   

  </tbody>

</table>


</div>

      </div>

    )

  }

}