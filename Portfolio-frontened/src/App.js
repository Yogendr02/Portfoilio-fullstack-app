import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Resume from "./Resume";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        
        <Navbar />
        <br />
        <About />
        <br />
        <Education />
        <br />
        <Skills />
        <Certificates />
        <br />
        <Projects/>
        <br />
        <Contacts />
        <br />
        <Resume />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}
