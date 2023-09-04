import React, { Component } from 'react';
// import './about.css'; 
import './styles.css';
import Navbar from './navbar';

export default class about extends Component {
  render() {
    return (
      <div className="container"> 
        <Navbar/> 
        <p className="mt-1">Welcome to our Agency Management System! We are dedicated to providing top-notch services for both agencies and customers.</p>
        <p>Our goal is to streamline the process of job postings, job requests, and communication between agencies and customers, making the entire experience seamless and efficient.</p>

        <div className="text-center mt-5">
          <h1>The Industry's First and Most Comprehensive Agency Platform</h1>
        </div>
        
        <h4>WITH THE INDUSTRY'S FIRST AND MOST COMPREHENSIVE AGENCY PLATFORM</h4>
           
        <div className="row mt-5">
          <div className="col-md-4">
      
            <h2 >SAVE TIME & MONEY</h2>
            <img src="https://ams4you.com/images/homepageimages/save_you_time_and_money.jpg"></img>
          </div>
          <div className="col-md-4">
            <h2 >GROW YOUR BUSINESS</h2>
            <img src="https://ams4you.com/images/homepageimages/grow_your_business_with_ams.jpg"></img>
          </div>
          <div className="col-md-4">
            <h2 >ANYWHERE, ANYTIME, ANY DEVICE</h2>
            <img src="https://ams4you.com/images/homepageimages/work_anywhere_with_ams.jpg"></img>
          </div>
        </div>

        <div className="text-center mt-5">
          
        </div>
      </div>
    );
  }
}

// import React from 'react';
// import './styles.css';
// import web from '../Images/bgimg1.png';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

// const about = () => {
//   return (
//     <section id="header" className="">
//             <div className="container-fluid nav_bg">
//                  <div className="row">
//                    <div className="col-10 mx-auto">
//                     <div className="row">

                    
//                     <div id="text" className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 flex-column">
//                           <h3>Empower Your <strong className='bold' style={{color:'blue'}}>Agency</strong>&nbsp;with the&nbsp;Seamless Efficiency</h3>
//                           <p className="mt-3">
//                             Have team best of developers providing the best services.
//                           </p>
//                           <div className="mt-3">
//                             <NavLink className="btn btn-outline-primary" to="/register">Get Started</NavLink>
//                           </div>
//                     </div>
//                     <div id="image1" className="col-lg-6 order-1 order-lg-2 header-img">
//                       <img src={web} className="img-fluid animated" alt="home img"></img>
//                     </div>
//                     </div>
//                    </div>
//                  </div>

//             </div>

//         </section>
        
//   );
// };

// export default about;

