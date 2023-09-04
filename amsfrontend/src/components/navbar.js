// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const storedUser = JSON.parse(localStorage.getItem('loginDetails'));
    //const role=storedUser.role; 

    return (
        
        <div>
             {/* navbar navbar-expand-lg navbar-light bg-light */}
           
        <nav className="navbar navbar-expand-lg navbar-light lg-light" data-bs-theme="dark" style={{height:'70px'}}>
            <div className="container-fluid ">
             
            <Link to="/" className="navbar-brand logo-link" style={{color:'blue'}}>
                     <img src="https://img.freepik.com/premium-vector/people-group-logo-design-vector_677112-479.jpg?w=2000" alt="Logo" className="d-inline-block align-top logo-img" style={{borderRadius:"15px",width:"45px"}}/>
                     &nbsp;&nbsp;<span>Agency Management System</span>
                   </Link>



            {storedUser === null && (

<div className="links">
<ul className="nav nav-pills nav-fill">
  
<li className="nav-item1"><Link to="/" style={{ textDecoration: 'none'}}>Home &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>    
<li className="nav-item2"><Link to="/about" style={{ textDecoration: 'none' }}>About Us &nbsp;&nbsp;&nbsp;&nbsp;</Link></li> 
<li className="nav-item3"><Link to="/cs" style={{ textDecoration: 'none' }}>Contact &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>      
<li className="nav-item4"><Link to="/login" style={{ textDecoration: 'none' }}>Login &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
<li className="nav-item5"><Link to="/register" style={{ textDecoration: 'none' }}>Register &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
{/* <li className="nav-item5"><Link to="/practise" style={{ textDecoration: 'none' }}>Practise &nbsp;&nbsp;&nbsp;&nbsp;</Link></li> */}
</ul>
</div>
            )}
          
            {/* Customer */}
             {storedUser != null && storedUser.role === 'customer' && (
            //    <div className="links">
            //    <ul className="nav nav-pills nav-fill">
                    
            // <li className="nav-item">
            // <a className="nav-link" href="/JobPost">Job Post</a>
            //     </li>
            //     <li className="nav-item">
            // <a className="nav-link" href="/search">Search</a>
            //     </li>
            // <li className="nav-item">
            // <a className="nav-link" href="/logout">LogOut</a>
            //    </li>
            //    <li className="nav-item">
            // <a className="nav-link" href="/history">Job History</a>
            //     </li>
            // </ul>
            // </div>


            <div className="links">
<ul className="nav nav-pills nav-fill">
  
<li className="nav-item1"><Link to="/JobPost" style={{ textDecoration: 'none'}}>Add Job Post &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>    
{/* <li className="nav-item2"><Link to="/search" style={{ textDecoration: 'none' }}>Search &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>  */}
<li className="nav-item3"><Link to="/history" style={{ textDecoration: 'none' }}>Job History &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
<li className="nav-item2"><Link to="/about" style={{ textDecoration: 'none' }}>About Us &nbsp;&nbsp;&nbsp;&nbsp;</Link></li> 
<li className="nav-item3"><Link to="/cs" style={{ textDecoration: 'none' }}>Contact &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>      
<li className="nav-item4"><Link to="/logout" style={{ textDecoration: 'none' }}>Logout &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
</ul>
</div>


            )} 
             
              {storedUser != null && storedUser.role === 'Agency' && (
            //     <div className="collapse navbar-collapse" id="navbarNav">
            //  <ul className="nav nav-pills nav-fill">
            // <li className="nav-item">
            // <a className="nav-link" href="/notify">Notification</a>
            //     </li>
            
            // <li className="nav-item">
            // <a className="nav-link" href="/jobReqDesc">Job Request</a>
            //     </li>
            // <li className="nav-item"><a className="nav-link" href="/logout">LogOut</a></li>
            // </ul> 
            // </div>
            <div className="links">
            <ul className="nav nav-pills nav-fill">
              
            <li className="nav-item1"><Link to="/notify" style={{ textDecoration: 'none'}}>Notification &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>    
            <li className="nav-item2"><Link to="/jobReqDesc" style={{ textDecoration: 'none' }}>Job Request &nbsp;&nbsp;&nbsp;&nbsp;</Link></li> 
            <li className="nav-item2"><Link to="/about" style={{ textDecoration: 'none' }}>About Us &nbsp;&nbsp;&nbsp;&nbsp;</Link></li> 
<li className="nav-item3"><Link to="/cs" style={{ textDecoration: 'none' }}>Contact &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>     
            <li className="nav-item4"><Link to="/logout" style={{ textDecoration: 'none' }}>Logout &nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
            </ul>
            </div>
            


             )} 
            {/* <li className="nav-item"><Link to="/jobPosts"></Link></li> */}
            
           
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
