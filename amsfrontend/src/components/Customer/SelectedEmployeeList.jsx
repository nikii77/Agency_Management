import React, { Component } from 'react';

import agencyService from '../../service/agencyService';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import Swal from "sweetalert2";

 

export default class SelectEmployeeList extends Component {
   
    constructor(props){

        super(props)

        this.state={
            
            employees: [],
            // buttonText: 'Click Me',
            buttonDisabled: false,
            buttonContent: {},
            message: "mail send successfully to Employee and send notification to Agency."
        }

    }

    componentDidMount(){
      const storedUser = JSON.parse(localStorage.getItem('loginDetails'));
        const userid=storedUser.userId;
        const jobId = this.props.location.state.jobId;
        //alert(jobId);
        agencyService.selectedempl(userid,jobId).then((res) => {

            this.setState({employees:res.data});

        })

    }
    
    
    
      saveselectedEmp = (record) => {
        const jobId = this.props.location.state.jobId;
      this.setState((prevState) => ({
         buttonContent: {
           buttonDisabled: true,
           ...prevState.buttonContent,
           [record.id]: prevState.buttonContent[record.id] === 'Select' ? 'Selected' : 'Select' ,
        //  [record.id]: prevState.buttonDisabled=true
         },
       }));
       // alert(record.name);
      agencyService.sendemail(record.email).then((resp) => {
         this.setState({ message: "mail send successfully to Employee and send notification to Agency." });
         agencyService.statuschange(jobId,record.id);
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: this.state.message,
           showConfirmButton: false,
           timer: 1500,
         });

         
       // this.props.history.push("/employeeList");
       }) .catch((err) => {
         alert("something wrong");
         this.props.history.push("/selectemp");
       });
      //  alert(msg);
      //  if(msg=="Emails send")
     
     
      };
  render() {
    // // const { data } = this.props;
    const {buttonDisabled } = this.state;

    return (
    
        
      <div>
       <Navbar/>
       {this.state.employees == '' && (
        <div>
          <b><center>NO  employee is send to particular Job Request</center></b>
        </div>
       )}

       {this.state.employees != '' && (
        <div>
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
            
             <td>
            
            
            
         <button onClick={() =>this.saveselectedEmp(employee)} disabled={this.state.buttonContent[employee.id]}>
                    {this.state.buttonContent[employee.id] || 'Select'}
                  </button> 
             </td>

           
         </tr>
          
        ))}
        
         
        
 

   

</tbody>

</table>
     </div>
       )}


    
      </div>
    
   

    )

  }

}