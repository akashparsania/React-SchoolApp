import axios from "axios"
const Base_URL='https://serverapp.herokuapp.com/'


axios.interceptors.request.use(
    req => {
      const token = localStorage.token;
      if (token) {
        req.headers['authorization'] = token;
      }
      // config.headers['Content-Type'] = 'application/json';
      return req
    },
    error => {
      Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    response => {
      return response
    },
    function (error) {
      
      return Promise.reject(error)
    }
  )
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

