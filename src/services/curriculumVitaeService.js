import axios from 'axios';

export default class CurriculumVitaeService{
    getAll(){
        return axios.get("http://localhost:8080/api/curriculumVitaes/getAll")
    }
}