import axios from "axios"

export default function Educationapi(){
    const load = (filing)=>{
        const response = axios.post("http://localhost:3001/degree",filing)
        return (response.data)
    }
    const showdegree = async () => {
        const response = await axios.get("http://localhost:3001/showdegree");
        return response.data;
      };
    return({load,showdegree})

}


