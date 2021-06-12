import axios from 'axios';

export default class JobService{
    add(){
        return axios.create("http://localhost:8080/api/jobs/add")
    }

    getAll(){
        return axios.get("http://localhost:8080/api/jobs/getall")
    }
}