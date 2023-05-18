import axios from "axios"

const API = axios.create({baseURL:"https://api.data.gov/ed/collegescorecard/v1/schools.json"})




export function search_Enter(search){
    return API.get(`?api_key=${process.env.REACT_APP_COLLEGE_API_KEY}&school.name=${search}&fields=id,school.name,school.alias,school.state,school.school_url,2020.cost.tuition,2020.student.size,2020.cost.roomboard,2020.student.demographics.men,2020.student.demographics.women,student.demographics.married,school.city,school.zip`)
}

