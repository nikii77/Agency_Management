// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 import Home from './components/home';
import Login from './components/login';
import  RegistrationForm from './components/Register';
import CheckEmail from './components/ForgetPassword';
import JobReq from './components/jobpractise';

import about from './components/about';
import customersupport from './components/Contact';
import Footer from './components/Footer';
// import VerifyOTP from './components/verifyOtp';
import changePassword from './components/changePassword';
import ForgetPassword from './components/ForgetPassword';
import VerifyOTP from './components/verifyOtp'
//Customer
import  AddJobReq from './components/Customer/AddJobReq';
import SelectEmployeeList from './components/Customer/SelectedEmployeeList';
import SearchJobPost from './components/Customer/SearchJobPost';
import History from './components/Customer/History';

//Agency
import Notification from './components/Agency/Notification';
import JobPostDesc from './components/Agency/JobPostDesc';
import JobPost from './components/Agency/JobPost';
import EmployeeList from './components/Agency/EmployeeList';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        
        
      <Router>
       {/* <Navbar/> */}
      <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/checkEmail" component={CheckEmail} />
          <Route path="/logout" component={Logout} />
          <Route path="/verifyOtp" component={VerifyOTP} />
          <Route path="/changepassword" component={changePassword} /> 
          <Route path="/forget" component={ForgetPassword} /> 
         
          <Route path="/about" component={about}/>
          <Route path="/cs" component={customersupport} />
          <Route path="/practise" component={JobReq} /> 

             {/* //Customer */}
          <Route path="/JobPost" component={AddJobReq} />
          <Route path="/selectemp" component={SelectEmployeeList} />
          <Route path="/search" component={SearchJobPost} />
          <Route path="/history" component={History} />
          {/* //Agency */}
          <Route path="/notify" component={Notification} />
          <Route path="/jobReqDesc" component={JobPostDesc} />
          <Route path="/jobPosts" component={JobPost} />
          <Route path="/employeeList" component={EmployeeList} />

      </Switch>
      <Footer />
  </Router>

        
    );
};

export default App;
