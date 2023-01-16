import axios from "axios"
const Base_URL='https://serverapp.herokuapp.com/'
export class ServerCall{

 static sendGet(url){
       return axios.get(Base_URL+url)
    }

    static sendPost(url,data){
        return axios.post(Base_URL+url,data)
    }

    static sendPut(url,data){
        return axios.put(Base_URL+url,data)

    }

    static sendDelete(url,data){
        return axios.delete(Base_URL+url,data)

    }
}

