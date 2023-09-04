// Home.js
import React from 'react';
import Navbar from './navbar';
import './styles.css';
import web from '../Images/bgimg1.png';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
const Home = () => {
    return(

        <div>
         <Navbar />  
      <section id="header" className="">
          <div className="container-fluid nav_bg">
               <div className="row">
                 <div className="col-10 mx-auto">
                  <div className="row">

                  
                  <div id="text" className="col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 flex-column">
                        <h3>Empower Your <strong className='bold' style={{color:'blue'}}>Agency</strong>&nbsp;with the&nbsp;Seamless Efficiency</h3>
                        <p className="mt-3">
                          Have team best of developers providing the best services.
                        </p>
                        <div className="mt-3">
                          <NavLink className="btn btn-outline-primary" to="/register">Get Started</NavLink>
                        </div>
                  </div>
                  <div id="image1" className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated" alt="home img"></img>
                  </div>
                  </div>
                 </div>
               </div>

          </div>

      </section>
      </div>
    );
    
   
};

export default Home;

// About.js, Services.js, Contact.js (similar structure)
// ...
