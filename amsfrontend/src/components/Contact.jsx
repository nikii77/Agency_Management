import React, { Component } from 'react';
import './styles.css';
import Navbar from './navbar';
export default class customersupport extends Component {
  render() {
    const emailAddress = 'info@ams4you.com';
    return (
    <div className='p' style={{fontFamily:""}}> <div>
        <Navbar/>
    <div className="container mt-5">
 <h2 className="text-center mb-4">WELCOME TO THE AMS SUPPORT CENTRE</h2>
 <p className="text-center" >
   WE VALUE YOUR RELATIONSHIP AND YOUR SATISFACTION IS IMPORTANT TO US.
   At AMS you can expect from our team an attitude that gets your job done.
   At every point of interaction you have with us, you can expect our team's total ownership.
 </p>

 <div className="row mt-5" style={{fontFamily:""}}>
   <div className="col-md-6">
     <h4>FOR AGENCY</h4>
     <p>Trouble finding your AMS Login Page</p>
     {/* Add more content here */}
     <p className="mt-3">
     <strong>Contact to:</strong> <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
     </p>
   </div>
   <div className="col-md-6">
     <h4>FOR CUSTOMERS</h4>
     <p>Trouble with Username or Password</p>
     <strong>Email:</strong> <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
   </div>
 </div>

 <div className="row mt-5">
   
     <h4>About Us</h4>
     <p>
     The Agency Management System (AMS) is  developed by a group of talented students from CDAC in just one month. Its user-friendly interface, efficient functionalities, and intuitive design reflect the team's The AMS not only simplifies tasks but also enhances communication and collaboration between agencies and  customers.
     </p>
     <div className="container">
     At Agency Management System, we are committed to providing exceptional customer support to ensure your experience with our agency management system is smooth and efficient. We understand the importance of addressing your concerns promptly and offering assistance whenever you need it. Below, you'll find various ways to get in touch with our support team, as well as answers to common questions.



 <div className="text-center mt-5">
   <p>Feedback and Suggestions</p>
   

Your feedback is valuable to us. If you have any suggestions for improving our agency management system or if you've encountered any issues, please let us know. We are constantly working to enhance our platform and provide you with the best possible experience.

Thank you for choosing [Your Agency's Name] for your agency management needs. We look forward to assisting you and ensuring your success with our system.
 </div>
</div>
   
 </div>

 <div className="row mt-5">
   <div className="col-md-6">
     <h4>Contact Us</h4>
     {/* Add more content here */}
     <p className="mt-3">
      
       <strong>Email:</strong> <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
       <br />
       <strong>Phone:</strong> +1 567 257 2267
     </p>
   </div>
   <div className="col-md-6">
     {/* <h4>Important Links</h4> */}
     {/* Add more content here */}
   </div>
 </div>
</div>
 </div></div>
     
    )
  }
}

// import React, { useState } from "react";

// const Contact = () => {
//   const [data, setData] = useState({
//     fullname:"",
//     phone:"",
//     email:"",
//     msg:"",
//   });

//   const InputEvent = (event) => {
//        const {name, value}= event.target;

//        setData((preVal) => {
//         return {
//           ...preVal,
//           [name] : value,
//         }
//        })
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `My name is ${data.fullname}.My mobile number is ${data.phone} and email-id is ${data.email},here is what I want to say ${data.msg}!`
//     );
//   };
// return (
//   <>
//   <div className="my-1">
//     <h1 className="text-center"> Contact us </h1>
//   </div>
//   <div className="container contact_div">
//      <div className="row">
//       <div className="col-md-5 col-10 mx-auto" style={{top:"0px"}}>
//         <form onSubmit={formSubmit}>
//         <div class="mb-2">
//   <label for="exampleFormControlInput1" class="form-label">Full Name</label>
//   <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="enter your name"/>
// </div>
// <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Phone</label>
//   <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number"/>
// </div>
// <div class="mb-3">
//   <label for="exampleFormControlInput1" class="form-label">Email address</label>
//   <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
// </div>
// <div class="mb-3">
//   <label for="exampleFormControlTextarea1" class="form-label">Message</label>
//   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
// </div>
// <div class="col-12">
//     <button class="btn btn-outline-primary" type="submit">Submit form</button>
//   </div>
//         </form>
//       </div>
//      </div>
//   </div>
//   </>
//   );
// };
// export default Contact;