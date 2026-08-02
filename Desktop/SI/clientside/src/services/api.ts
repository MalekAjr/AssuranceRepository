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

getUsers: async () => {

    const response = await http.get("/users");

    return response.data;

  },


  getDemands: async () => {

    const response = await http.get("/demand");

    return response.data;

  },

createDemand: async (data:any)=>{

  const response = await http.post(
    "/demand",
    data
  );


  return response.data;

},

 getInsuranceTypes: async () => {
    const response = await http.get("/insurance-types");

    return response.data;
  },

getInsuranceDemandStats: async () => {

  const response = await http.get(
    "/demand/stats/insurance"
  );

  return response.data;

},

getDemand: async(id:number)=>{

 const response = await http.get(
   `/demand/${id}`
 );

 return response.data;

},


createInsuranceType: async(data:any)=>{

const response = await http.post(
"/insurance-types",
data
);

return response.data;

},



createProduct: async(data:any)=>{

const response = await http.post(
"/product",
data
);

return response.data;

},

};


export default api;