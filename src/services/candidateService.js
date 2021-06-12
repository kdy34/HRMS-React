import axios from 'axios';

export default class CandidateService{
    add(){
        return axios.create("http://localhost:8080/api/candidate/add")
    }

    delete(){
        return axios.delete("http://localhost:8080/api/candidate/delete")
    }

    getAll(){
        return axios.get("http://localhost:8080/api/candidate/getall")
    }
}