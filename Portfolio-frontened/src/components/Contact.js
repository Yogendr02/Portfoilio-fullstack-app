import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineDash } from "react-icons/ai";
import { Button } from "@material-tailwind/react";

export default function Contact({ data }) {
  const deletecontact = async (data2) => {
    return await axios
      .delete("http://localhost:3001/deletecontact", data2)
      .then((res) => res.data);
  };
  const deletecont = useMutation({
    mutationFn: deletecontact,
  });
  const manageclick = (data2) => {
    deletecont.mutateAsync({ name: data2 });
  };
  return (
    <div id="con" className="flex items-center">
      <div className="bg-clip-text bg-gradient-to-r text-transparent text-2xl from-red-500 to-yellow-500 text-center basis-2/6" >{data.name}</div>
      {/* <figure className="relative h-full w-full">
        <img
          className="h-16 w-full rounded-xl"
          src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-simple-yellow-gradient-geometric-irregular-shape-image_20191.jpg"
          alt=""
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm"></figcaption>
        <Typography variant="h5 -mt-10" color="blue-gray">
          {data.name}
        </Typography>
      </figure> */}
      <div className="bg-white h-3 flex items-center rounded-lg basis-2/6">
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <AiOutlineDash />
        <BsArrowRight />
      </div>
      <div className="bg-clip-text bg-gradient-to-r mx-2 text-transparent text-lg from-red-500 to-yellow-500 text-center  basis-2/6 ">{data.link}</div>
      <Button
        color="red"
        className="text-white my-2 h-8 text-left"
        onClick={() => {
          manageclick(data.name);
        }}
      >
        Delete
      </Button>
    </div>
  );
}
