import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function Certificate({ data }) {
  const deletecertificate = async (dito) => {
    return await axios
      .delete("http://localhost:3001/deletecertificate", { data: dito })
      .then((res) => res.data);
  };
  const deletecerti = useMutation({
    mutationFn: deletecertificate,
  });
  const manageclick = (ditto) => {
    deletecerti.mutateAsync({ name: ditto });
  };
  return (
    <>
      <div id="certi" className="w-full flex">
        <div className="basis-1/2 items-center flex">
          <div className="underline italic text-6xl text-green-800">
            {data.name}
          </div>
          <hr className="border-2 border-red-700 w-full" />
        </div>
        <div className="w-1 h-8 bg-red-700 self-end"></div>
      </div>
      <motion.img
        initial={{ z: -100, y: -100, opacity: 0 }}
        whileInView={{ z: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
        src={`data:image/png;base64,${data.img}`}
        alt={data.name}
        className="rounded-lg h-96 w-96 m-auto"
      />
      <div className="flex  justify-center">
        <Button
          color="red"
          className="bg-red-800 text-white text-lg "
          onClick={() => {
            manageclick(data.name);
          }}
        >
          delete
        </Button>
      </div>
    </>
  );
}
