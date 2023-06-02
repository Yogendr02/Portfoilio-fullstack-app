import {RxCrossCircled} from "react-icons/rx"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"


export default function Skill({data}){
    const deleteskill = async(data1)=>{
        return await axios.delete("http://localhost:3001/deleteskill",{data:data1}).then(console.log("deleted"))
    }
    const deletingskill = useMutation({
        mutationFn: deleteskill
    })
    const manageclick = (info)=>{
        deletingskill.mutateAsync({"name":info}).then(console.log("good job"))
        console.log(info,"has been deleted")
    }

    return (<div id="skill" className="flex items-center w-full mt-4">
        <div className="basis-1/5 h-1 bg-green-800"></div>
        <div className="h-24 w-24 rounded-full border-2 bg-red-500 text-yellow-600 text-center pt-8 break-all text-xl border-green-800">
            {data.name}
        </div>
        <div className="basis-1/5 h-1 bg-green-800"></div>
        <iframe src={data.link} title="kuchhbhi" className="border-2 border-green-800 h-60 basis-2/5"></iframe>
        <div className="basis-1/5 h-1 bg-green-800">
            <div className="bg-red-800 w-4 h-4 cursor-pointer" onClick={()=>{manageclick(data.name)}}>
                <RxCrossCircled/>
            </div>
        </div>
    </div>)
}