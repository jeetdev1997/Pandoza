import axios from "axios"
import { request } from "./request"

export async function saveNhsDetailsPatientreg(payload){
    try {
        // const headers = {
        //     'Authorization': `Bearer ${bearerToken}`,
        //     'userName': userName,
        //   };
        const response = await axios.post(`${process.env.REACT_APP_URLV1}${request.saveNhsDetailsPatientreg}`, payload); 
        console.log('response', response);
        return response;

    } catch (error) {
        console.log('Something went wrong!', error)
    }
}