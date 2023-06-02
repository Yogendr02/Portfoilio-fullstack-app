import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Input } from "@material-tailwind/react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import Loading from "./components/Loading";


export default function Resume() {
  const getresume = async () => {
    return await axios
      .get("http://localhost:3001/resume")
      .then((res) => res.data);
  };
  const sendresume = async (data1) => {
    return await axios
      .post("http://localhost:3001/sendresume", data1)
      .then((res) => res.data);
  };
  const getrest = useQuery({
    queryKey: ["resume"],
    queryFn: getresume,
  });
  const sendrest = useMutation({
    mutationFn: sendresume,
  });
  if (getrest.status === "loading") {
    return (<Loading/>)
  }
  if (getrest.status === "error") {
    return <h1>error</h1>;
  }
  const manageclick = (event) => {
    const formdata = new FormData();
    const v = event.target.files[0];
    formdata.append("img", v);
    sendrest.mutateAsync(formdata);
  };
  if (getrest.data[0] === undefined) {
    return (
      <div className="w-96 h-96 bg-red-700 border-4 border-yellow-600 font-extrabold italic">
        <Input
          type="file"
          className="bg-red-700 text-green-300"
          onChange={manageclick}
        />
      </div>
    );
  }
  return (
    <>
      <Heading name={"Resume"} />
      <div id="res" className="w-full">
        <motion.img
          initial={{ z: -100, x: -200, opacity: 0 }}
          whileInView={{ z: 0, x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 1, ease: "easeIn",type:"spring",damping:3 }}
          src={`data:image/png;base64,${getrest.data[0].img}`}
          alt={getrest.data.name}
          className="rounded-lg m-auto h-96 w-96"
        />
      </div>
    </>
  );
}
