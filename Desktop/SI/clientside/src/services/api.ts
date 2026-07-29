import axios from "axios";


const http = axios.create({

  baseURL: import.meta.env.VITE_API_URL,

});



const api = {


  signup: async (data:{
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    password:string;
  }) => {


    const response = await http.post(
      "/auth/signup",
      data
    );


    return response.data;

  },




  login: async (data:{
    email:string;
    password:string;
  }) => {


    const response = await http.post(
      "/auth/login",
      data
    );


    return response.data;

  },

createDemand: async (data:any)=>{

  const response = await http.post(
    "/demand",
    data
  );


  return response.data;

},

};


export default api;