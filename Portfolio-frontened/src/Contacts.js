import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import Contact from "./components/Contact";
import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import Heading from "./Heading";
import Linkedin from "./Linkedin";
import Loading from "./components/Loading";


export default function Contacts() {
  const [naming, setnaming] = useState("");
  const [linking, setlinking] = useState("");

  const getcontact = async () => {
    return await axios
      .get("http://localhost:3001/contact")
      .then((res) => res.data);
  };
  const sendcontact = async (data1) => {
    return await axios
      .post("http://localhost:3001/sendcontact", data1)
      .then((res) => res.data);
  };

  const getcont = useQuery({
    queryKey: ["contacts"],
    queryFn: getcontact,
  });
  const sendcont = useMutation({
    mutationFn: sendcontact,
  });

  if (getcont.status === "loading") {
    return <Loading/>;
  }
  if (getcont.status === "error") {
    return <div className="bg-red-600 text-white">ERROR</div>;
  }
  const managename = (event) => {
    setnaming(event.target.value);
  };
  const managelink = (event) => {
    setlinking(event.target.value);
  };
  const sended = () => {
    sendcont.mutateAsync({ name: naming, link: linking });
  };
  return (
    <>
      <Heading name={"Contacts Info."}/>
      {getcont.data.map((item) => {
        return (
          <div key={item.name}>
            <Contact data={item} />
          </div>
        );
      })}
      <Linkedin/>

      <div className="w-full flex justify-center">
        <div className="flex flex-col w-72 items-end gap-6">
          <Input size="md" label="Title" onChange={managename} />
          <Input size="lg" label="Detail" onChange={managelink} />
        <Button color="green" className="text-yellow-400 m-auto" onClick={sended}>
          Click to Add
        </Button>
        </div>
      </div>
    </>
  );
}
