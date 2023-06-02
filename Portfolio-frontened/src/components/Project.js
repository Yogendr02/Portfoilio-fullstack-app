import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Input } from "@material-tailwind/react";
import classNames from "classnames";
import { motion } from "framer-motion";

export default function Project({ data }) {
  const [updip, setupdip] = useState("");
  const [visibility, setvisibility] = useState(false);
  const updateproject = async (filing) => {
    return await axios
      .patch("http://localhost:3001/updateproject", filing)
      .then((res) => res.data);
  };
  const deleteproject = async (data1) => {
    return await axios
      .delete("http://localhost:3001/deleteproject", { data: data1 })
      .then(console.log("deleted"));
  };
  const deletepro = useMutation({
    mutationFn: deleteproject,
  });

  const managedelete = (info) => {
    deletepro.mutateAsync({ name: info }).then(console.log("good job"));
    console.log(info, "has been deleted");
  };

  const updatingpro = useMutation({
    mutationFn: updateproject,
  });
  const updiplink = (event) => {
    setupdip(event.target.value);
  };
  const managevisibility = () => {
    setvisibility(!visibility);
  };
  const manageclick = (deto) => {
    updatingpro.mutateAsync({ name: deto, link: updip });
    setvisibility(!visibility);
  };
  const editvisible = classNames("top-0 right-0 flex space-x-2 ml-72 -mt-11", {
    invisible: visibility,
  });
  return (
    <motion.div
      initial={{x:-1000}}
      whileInView={{x:0}}
      transition={{delay:0.5,duration:1,ease:"easeIn",type:"spring"}}
      id="pro"
      className="bg-white m-2 border-2 border-blue-600 drop-shadow-2x p-2"
    >
      <div className="w-full drop-shadow-2xl bg-blue-gray-100">
        <div className="flex items-center w-full">
          <div className="basis-1/5 h-1 bg-deep-orange-700 "></div>
          <a
            href={data.link}
            className="basis-1/5 w-24 text-center pt-9 h-24 border-2 border-deep-orange-700"
          >
            Link of the App
          </a>
          <h1 className="basis-1/5 text-center h-1 text-orange-700 font-semibold">
            {data.name}
          </h1>
          <a
            href={data.github}
            className="h-24 text-center pt-9 w-24 basis-1/5 border-2 border-deep-orange-700"
          >
            Github Repo link
          </a>
          <div className="h-1 basis-1/5 bg-deep-orange-700">
            <div className={editvisible} onClick={managevisibility}>
              <FiEdit />
              <MdDeleteOutline
                onClick={() => {
                  managedelete(data.name);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {visibility && (
        <div className="w-full mt-2 flex justify-center">
          <div className="w-72">
            <Input label="Enter new link of App" onChange={updiplink} />
          </div>
          <br />
          <button
            className="bg-red-800 border-2 rounded-lg h-10 border-yellow-500 ml-2 text-white"
            onClick={() => {
              manageclick(data.name);
            }}
          >
            click to update
          </button>
        </div>
      )}
    </motion.div>
  );
}
