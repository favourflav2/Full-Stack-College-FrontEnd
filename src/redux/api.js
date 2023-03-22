import axios from 'axios'

const devMode = process.env.NODE_ENV !== 'production'

const {REACT_APP_LOCALHOST_URL , REACT_APP_URL} = process.env

const API = axios.create({
    baseURL: `${devMode ? REACT_APP_LOCALHOST_URL : REACT_APP_URL}`
})

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }
    return req
})



export function search_Data(searchVal){
    return API.post("/college/search",searchVal)
}

export function search_Degree(id,page){
    return API.get(`/college/searchDegree/${id}?page=${page}`)
}

export function search_Data_By_Id(id){
    return API.get(`/college/searchCollegeById/${id}`)
}

export function sign_Up(formData){
    return API.post('/auth/signup',formData)
}

export function log_In(formData){
    return API.post('/auth/login',formData)
}

export function like_College_Name(id,name,code,degreeName,zip,city,state){
    return API.put(`/college/likeCollegeName/${id}`,name,code,degreeName,zip,city,state)
}

export function delete_College(id){
    return API.put("/college/deleteCollege",id)
}

export function get_Saved_School(){
    return API.get("/college/getSavedData")
}