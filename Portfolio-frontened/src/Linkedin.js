import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Input } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Loading from "./components/Loading";


export default function Linkedin() {
  const getimage = async () => {
    return await axios
      .get("http://localhost:3001/linkedin")
      .then((res) => res.data);
  };
  const sendimage = async (data1) => {
    return await axios
      .post("http://localhost:3001/sendlinkedin", data1)
      .then((res) => res.data);
  };
  const getim = useQuery({
    queryKey: ["image"],
    queryFn: getimage,
  });
  const sendim = useMutation({
    mutationFn: sendimage,
  });

  const managechange = (event) => {
    const formdata = new FormData();
    const v = event.target.files[0];
    formdata.append("img", v);
    sendim.mutateAsync(formdata);
  };
  if (getim.status === "loading") {
    return(<Loading/>)
  }
  if (getim.status === "error") {
    return <h1 className="bg-red-700 text-white">error guys for linkedin</h1>;
  }
  return (
    <>
      <div className="text-center text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        LinkedIn
      </div>
      <div className="flex align-middle">
        <div className="w-full justify-center basis-1/2 space-x-1 grid place-content-center">
          <motion.img
            initial={{ z: -100, x: -100, opacity: 0 }}
            whileInView={{ z: 0, x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 1, ease: "easeIn" }}
            src={`data:image/png;base64,${getim.data[0].img}`}
            alt={getim.data.name}
            className="rounded-lg h-96 w-96 ml-72"
          />
        </div>
        <div className="basis-1/2">
          <Input
            color="amber"
            type="file"
            className="text-green-300 w-72"
            onClick={managechange}
          />
        </div>
      </div>
    </>
  );
}
