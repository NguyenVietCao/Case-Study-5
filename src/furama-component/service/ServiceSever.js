import axios from "axios";

 export async function addService(service){
await axios.post("http://localhost:8080/services", service)
};

export async function getListService(){
    const res = await axios.get("http://localhost:8080/services");
    return res.data;
    }