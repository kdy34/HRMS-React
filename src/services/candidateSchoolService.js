import axios from "axios";

export default class CandidateSchoolService{

    add(){
        return axios.create("http://localhost:8080/api/schools/add")
    }

    getAllSorted(){
        return axios.get("http://localhost:8080/api/schools/getAllSorted")
    }
}