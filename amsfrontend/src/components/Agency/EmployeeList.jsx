import React, { Component } from 'react';

import agencyService from '../../service/agencyService';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import Swal from "sweetalert2";

 

export default class EmployeeList extends Component {
   
    constructor(props){

        super(props)

        this.state={
            
            employees: [],
            // buttonText: 'Click Me',
            buttonDisabled: false,
            buttonContent: {},
            message: "Employee send successfully."
        }

    }

    componentDidMount(){
      const storedUser = JSON.parse(localStorage.getItem('loginDetails'));
        const agencyid=storedUser.agencyid;
        agencyService.getAllEmployee(agencyid).then((res) => {

            this.setState({employees:res.data});

        })

    }
    
    
    
     saveselectedEmp = (record) => {
     
      this.setState((prevState) => ({
        buttonContent: {
          buttonDisabled: true,
          ...prevState.buttonContent,
          [record.id]: prevState.buttonContent[record.id] === 'Click Me' ? 'Clicked!' : 'Click Me' ,
        //  [record.id]: prevState.buttonDisabled=true
       
        },
      }));
      //  const userId=1;
      const userId = this.props.location.state.userId;
       const jobid=this.props.location.state.jobId;
      agencyService.sendSelectedemployee(userId,jobid,record) .then((resp) => {
         this.setState({ message: "Employee send successfully." });

         Swal.fire({
           position: "top-end",
           icon: "success",
           title: this.state.message,
           showConfirmButton: false,
           timer: 1500,
         });
      // this.props.history.push("/employeeList");

      this.props.history.push({
        pathname: '/employeeList',
        state: { userId: userId,
          jobId:jobid
   }
      })
       }) .catch((err) => {
         alert("something wrong");
         this.props.history.push("/employeeList");
       });
     



     };
  render() {
    // // const { data } = this.props;
    const {buttonDisabled } = this.state;

    return (
    
        
      <div>
       <Navbar/>
      <h2 className="text-center">Employee List: </h2>

      <table className="table table-striped table-bordered">

<thead>

  <tr>


    <th>Name</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>Date of Birth</th>
    <th>Qualification</th>
    <th>agencyid</th>
    <th>status</th>


  </tr>

</thead>

<tbody>

  
      
        {this.state.employees.map(employee =>  (
             
             <tr key={employee.id}>
          
             <td>{employee.name}</td>
             <td>{employee.email}</td>
             <td>{employee.mobile}</td>
             <td>{employee.dob}</td>
             <td>{employee.qualification}</td>
             <td>{employee.agencyid}</td>
             {/* <td><button className="btn btn-success mt-3" onClick={() =>this.saveselectedEmp(employee)}>Send</button> */}
             <td>
           
            
        <button onClick={() =>this.saveselectedEmp(employee)} disabled={this.state.buttonContent[employee.id]} className="btn btn-secondary">
                    {this.state.buttonContent[employee.id] || 'Click Me'}
                  </button>
             </td>

             {/* <td><button className="btn btn-success mt-3" onClick={this.jobPostDesc}>Display</button></td> */}

         </tr>
          
        ))}
        
         
        
 

   

</tbody>

</table>




    
      </div>
    
   

    )

  }

}