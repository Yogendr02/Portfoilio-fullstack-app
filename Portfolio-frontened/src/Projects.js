import axios from "axios";
import Project from "./components/Project";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import Heading from "./Heading";
import Loading from "./components/Loading";


export default function Projects(ref) {
  const [naming, setnaming] = useState("");
  const [linking, setlinking] = useState("");
  const [gitting, setgitting] = useState("");

  const getprojects = async () => {
    return await axios
      .get("http://localhost:3001/projects")
      .then((res) => res.data);
  };
  const postproject = async (filing) => {
    return await axios
      .post("http://localhost:3001/sendproject", filing)
      .then((res) => res.data);
  };

  const gettingpro = useQuery({
    queryKey: ["projects"],
    queryFn: getprojects,
  });
  const postpro = useMutation({
    mutationFn: postproject,
  });

  const namechange = (event) => {
    setnaming(event.target.value);
  };
  const linkchange = (event) => {
    setlinking(event.target.value);
  };
  const githubchange = (event) => {
    setgitting(event.target.value);
  };
  const manageclick = () => {
    postpro.mutateAsync({ name: naming, link: linking, github: gitting });
  };
  if (gettingpro.status === "loading") {
    return <Loading/>;
  }
  if (gettingpro.status === "error") {
    return <h1>error guys</h1>;
  }
  return (
    <>
      <Heading name={"Projects"}/>
      {gettingpro.data.map((item) => {
        return (
          <div key={item._id}>
            <Project data={item} />
          </div>
        );
      })}

      <div className="w-full flex justify-center">
        <div className="flex flex-col w-72 items-end justify-center gap-6">
          <Input
            value={naming}
            size="md"
            label="Name"
            className="w-full"
            onChange={namechange}
          />
          <Input
            size="md"
            value={linking}
            label="Link of App"
            type="text"
            onChange={linkchange}
          />
          <Input
            size="md"
            label="Github Repo link"
            type="text"
            value={gitting}
            onChange={githubchange}
          />
        </div>
      </div>

      <div className="w-full mt-2 flex justify-center">
        <Button
          color="green"
          className="text-white text-lg "
          onClick={manageclick}
        >
          Click to add
        </Button>
      </div>
    </>
  );
}
