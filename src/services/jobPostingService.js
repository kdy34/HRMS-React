import axios from 'axios';

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobpostings/getall")
    }

    getAllByApplicationDeadline(date){
        return axios.get("http://localhost:8080/api/jobpostings/getallbyapplicationdeadline?date" + date)
    }

    add(){
        return axios.post("http://localhost:8080/api/jobpostings/add")
    }

    delete(){
        return axios.delete("http://localhost:8080/api/jobpostings/delete")
    }
}