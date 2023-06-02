import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Educationapi from "./api/Educationapi";
import Heading from "./Heading";
import ten from "./images/10th.jpg";
import twelve from "./images/12th.jpg";


export default function Education() {
  const { load,showdegree } = Educationapi();
  const [a, seta] = useState(false);
  var getdegree;

  getdegree = useQuery({
    queryKey: ["showingdegree"],
    retry: true,
    queryFn: showdegree,
  });

  const createUpload = useMutation({
    enabled: getdegree.status === "error",
    mutationFn: load,
  });

  const upload = (event) => {
    var formdata = new FormData();
    const v = event.target.files[0];
    formdata.append("degree", v);
    console.log(formdata);
    createUpload.mutate(formdata);
  };

  const manageclick = () => {
    seta(true);
  };

  return (
    <>
      <Heading name={"Education"} />
      <div id="edu" className="flex flex-row gap-16">
        <div className="slide-right basis-1/2 bg-black text-yellow-300 rounded-lg p-2 break-all">
          <h1 className="ml-56 mt-4 underline font-extrabold text-2xl text-[#d946ef]">
            Schooling
          </h1>
          <div className="mt-4 text-[#22d3ee] italic break-normal">
            I passed out 10th and 12th from International centre English School
            near Swaroop nagar,Kanpur in 2019 and 2021.I am from science with
            computer science background. I scored 90% in class 10th and 73.4% in
            class 12th.After the completion of my schooling I cleared out JEE
            MAINS 2021
          </div>

          <div className="flex items-center">
            <img src={ten} className="h-60 w-60 border border-red-800" alt="" />
            <hr className="h-1 w-24 border-0 bg-red-800"></hr>
            <img
              src={twelve}
              className="h-60 w-60 border border-red-800"
              alt=""
            />
          </div>
        </div>
        <div className="slide-left basis-1/2 grid-cols-1 bg-yellow-300 ml-36 p-2 rounded-lg ">
          <h1 className="ml-56 mt-4 underline font-extrabold text-2xl text-[#d946ef]">
            College
          </h1>
          <div className="mt-4 text-[#059669] italic break-normal">
            Currently in 2023 I am persuing an undergraduate B-Tech course from Biotechnology branch in NIT ANDHRA PRADESH.
            During my ongoing B-Tech I have learned many industry related skills like HTML,CSS,javascript,node.js,React.js wit Redux,Git and Github, and many more to go
            I will my B-tech in 2025. 
          </div>
          <br />
          {getdegree.status === "success" || a ? (
            <img
              src={getdegree.data}
              alt="degree"
              className="w-60 h-60 rounded-lg ml-36"
            />
          ) : (
            <div className="bg-red-800 text-white w-60 h-60 ml-36 rounded-lg break-all">
              <input
                className="rounded-lg mt-28 ml-4"
                type="file"
                onChange={upload}
                name="img"
              />
              <button
                onClick={manageclick}
                className="bg-yellow-600 rounded-full ml-16 mt-1 p-2"
              >
                Click to upload
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
