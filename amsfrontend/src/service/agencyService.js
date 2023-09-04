import axios from 'axios';

const EMP_API_BASE_URL="http://localhost:8080";

class agencyService{



  loginVendor(email,password){
    return axios.get(EMP_API_BASE_URL+"/api/login/"+email+"/"+password);
  }

  forgetPassword(email){
    return axios.get(EMP_API_BASE_URL+"/api/forgetpassword/"+email);

  }

  forgetsPassword(email,password){
    return axios.put(EMP_API_BASE_URL+"/api/forgetpassword/"+email+"/"+password);
  }

getUsers(){

    return axios.get(EMP_API_BASE_URL+"/api/users");

}
addUser(user) {
    return axios.post(EMP_API_BASE_URL + "/api/register", user);

  }


  //jobid
  addJobReq(jobReq){
    return axios.post(EMP_API_BASE_URL + "/job_req/addJobReq",jobReq);

  }

  //userid
  jobrequser(userid){
    return axios.post(EMP_API_BASE_URL + "/job_req/getjobRequser/"+userid);

  }
  sendemail(email){
    return axios.get(EMP_API_BASE_URL + "/api/sndem/"+email);

  }
//for change the staus to selcted in sendemployee
 statuschange(empid,jobid){
  return axios.put(EMP_API_BASE_URL+"/sendemployee/updatesendemp/"+empid+"/"+jobid);

 }

  selectedempl(userid,jobid){

    return axios.get(EMP_API_BASE_URL+"/sendemployee/selectedemployeeforjob/"+userid+"/"+jobid);
  }
  searchjobpost(userid,jobtype){

    return axios.get(EMP_API_BASE_URL+"/job_req/getjobReqforuser/"+userid+"/"+jobtype);
  }

  //agency
  getAlljobs(){

    return axios.get(EMP_API_BASE_URL+"/job_req/getAljobReq");
  }
 getjobsbyId(jobid){

    return axios.get(EMP_API_BASE_URL+"/job_req/getjobReq/"+jobid);
   }
  getAllNotify(){

    return axios.get(EMP_API_BASE_URL+"/notification/notify");
  }

  getAllEmployee(agencyid){

    return axios.get(EMP_API_BASE_URL+"/employee/getAlEmployee/"+agencyid);
  }


  sendSelectedemployee(userid,jobid,employee){
    return axios.post(EMP_API_BASE_URL + "/sendemployee/addSaveEmployee/"+userid+"/"+jobid,employee);
  }

  updateemployee(empid){
    return axios.put(EMP_API_BASE_URL + "/employee/updateemployee/"+empid);
  }
  
}

 

export default new agencyService();