import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import Skill from "./components/Skill";
import { useState } from "react";
import { Input } from "@material-tailwind/react";
import classNames from "classnames";
import Heading from "./Heading";
import Loading from "./components/Loading";


export default function Skills() {
  const [name, setname] = useState("");
  const [link, setlink] = useState("");
  const [addition, setaddition] = useState(true);

  const getskill = async () => {
    return await axios
      .get("http://localhost:3001/skill")
      .then((res) => res.data);
  };
  const addskill = async (data) => {
    return await axios
      .post("http://localhost:3001/sendskill", data)
      .then((res) => res.data);
  };

  const gotskill = useQuery({
    queryKey: ["skill"],
    queryFn: getskill,
  });
  const addingskill = useMutation({
    mutationFn: addskill,
  });

  if (gotskill.status === "loading") {
    return (<Loading/>);
  }
  if (gotskill.status === "error") {
    console.log(gotskill.error);
    return <h1 className="bg-red-800 w-full text-teal-50">EROOR</h1>;
  }

  const namechange = (event) => {
    setname(event.target.value);
  };
  const linkchange = (event) => {
    setlink(event.target.value);
  };

  const manageclick = () => {
    addingskill.mutateAsync({ name, link }).then(console.log("good job"));
    setaddition(!addition);
  };
  const classier = classNames("flex flex-col w-72 mt-2 items-center gap-6 mx-auto");
  const classie = classNames(
    "h-16 w-16 bg-red-600 text-white border-yellow-500 border-4 ml-16 rounded-lg"
  );
  const addclick = () => {
    setaddition(!addition);
  };

  return (
    <>
      <Heading name={"Skills"} />
      {gotskill.data.map((item) => {
        return (
          <div key={item._id}>
            <Skill data={item} />
          </div>
        );
      })}
      {addition && (
        <div className="flex justify-center mt-5">
          <button className={classie} onClick={addclick}>
            ADD
          </button>
        </div>
      )}

      {!addition && (
        <div className={classier}>
          <Input
            size="md"
            label="Enter name of technology"
            onChange={namechange}
          />
          <Input size="lg" label="Paste embeded link" onChange={linkchange} />
          <button
            className="bg-red-800 h-8 w-24 rounded-md text-white"
            onClick={manageclick}
          >
            click to add
          </button>
        </div>
      )}
    </>
  );
}
