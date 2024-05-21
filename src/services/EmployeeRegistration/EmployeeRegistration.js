import axios from "axios"
import { request } from "./request"

export async function  prefixMaster(){
    try {
        // const headers = {
        //     'Authorization': `Bearer ${bearerToken}`,
        //     'userName': userName,
        //   };
        const response = await axios.get(`${process.env.REACT_APP_URLV1}${request.prefixMaster}`); 
        console.log('response', response);
        return response;

    } catch (error) {
        console.log('Something went wrong!', error)
    }
}