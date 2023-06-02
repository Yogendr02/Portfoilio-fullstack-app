import logo from "./images/myself.jpg"
import Heading from "./Heading"

export default function About(){
    return (<>
        <Heading name={"About"}/>
        <div className="flex justify-center items-center space-x-28 h-auto w-full">
        <div className="kuch basis-3/5 h-auto break-normal shadow-3xl shadow-lg shadow-indigo-500/50 bg-purple-600 rounded-sm border-red-300 ">
            <h1 className="text-zinc-50 m-2 text-2xl font-extrabold italic font-serif">My name is Yogendra kesarwani!</h1>
            <br />
            <div className="text-zinc-50 p-2">I am living in kanpur,U.P. I want to become a successful web and android developer. 
            Currently I am studying in NIT Andhra Pradesh. I have completed my schooling through International center english school in kanpur.
            I got 73026 rank in JEE MAINS EXAMINATION of 2021. My future goal is to become a data scientist. I very ambitious regarding my future 
            
            </div>

        </div>
        <img src={logo} alt="" className="h-36 basis-1/5"/>
        </div>
    
    </>)
}