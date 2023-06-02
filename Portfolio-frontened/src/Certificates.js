import Certificate from "./components/Certificate";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import Heading from "./Heading";
import Loading from "./components/Loading";

export default function Certificates() {
  const [detail, setdetail] = useState("");
  const getcertificate = async () => {
    return await axios
      .get("http://localhost:3001/certificates")
      .then((res) => res.data);
  };
  const uploadcertificate = async (filing) => {
    return await axios
      .post("http://localhost:3001/sendcertificate", filing)
      .then((res) => res.data);
  };
  const uploaddetail = async (deto) => {
    return await axios
      .post("http://localhost:3001/sendcertificatedetails", deto)
      .then((res) => res.data);
  };

  const gettingcerti = useQuery({
    queryKey: ["certi"],
    queryFn: getcertificate,
  });
  const uploadingcerti = useMutation({
    mutationFn: uploadcertificate,
  });
  const uploadetail = useMutation({
    mutationFn: uploaddetail,
  });

  const managefile = (event) => {
    const v = event.target.files[0];
    const formdata = new FormData();
    formdata.append("img", v);
    uploadingcerti.mutateAsync(formdata);
  };
  const managechange = (event) => {
    setdetail(event.target.value);
  };
  const manageclick = (namedata) => {
    uploadetail.mutate({ name: namedata });
  };
  if (gettingcerti.status === "loading") {
    return <Loading/>;
  }
  if (gettingcerti.status === "error") {
    return <h1>error guys</h1>;
  }

  return (
    <>
      <Heading name={"Certificates"}/>
      {gettingcerti.data.map((item) => {
        return (
          <div key={item.name}>
            <Certificate data={item} />
          </div>
        );
      })}
      <br />
      <div className="w-full flex justify-center">
        <div className="flex flex-col w-72 items-end justify-center gap-6">
          <Input
            size="md"
            label="Title"
            className="w-full"
            onChange={managechange}
          />
          <Input
            size="md"
            label="Choose file"
            type="file"
            onChange={managefile}
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Button
          color="green"
          className="text-white text-lg "
          onClick={() => {
            manageclick(detail);
          }}
        >
          Click to upload
        </Button>
      </div>
    </>
  );
}
