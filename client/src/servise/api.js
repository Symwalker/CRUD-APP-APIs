import axios from "axios";


const URL  = 'http://localhost:8000';
export const addUsers =async (data) =>{
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log("Error while calling add user api",error);
    }
} 
export const addUser =async (id) =>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while calling single user api",error);
    }
} 
export const editUser =async ( user, id) =>{
    try {
        return await axios.post(`${URL}/${id}`,user)
    } catch (error) {
        console.log("Error while calling single user api",error);
    }
} 
export const deleteUser =async (id) =>{
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while delete single user api",error);
    }
} 