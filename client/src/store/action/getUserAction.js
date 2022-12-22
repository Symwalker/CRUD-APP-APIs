// const { default: axios } = require("axios")
import axios from "axios"
const { default: ActionTypes } = require("../constants")

const getUserAction = ()=>{
    const URL  = 'http://localhost:8000';

    return async (dispatch)=>{
        try {

            dispatch({
                type : ActionTypes.GET_USER_DATA_LOADING,
            })
            const data =await axios.get(`${URL}/add`)
            // const product =await data.json()
            dispatch({
                type :ActionTypes.GET_USER_DATA ,   
                payload : data.data
            })
            
            console.log(data.data , "action Data");
        } catch (error) {
         console.log(error);   
        }

    }
}


export {getUserAction }

