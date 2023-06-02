import logo from "./images/logo-png.png";
import { Link } from "react-scroll";
export default function Navbar() {

  return (
    <>
      <nav className="bg-gradient-to-r flex space-x-[568px] from-green-400 to-blue-500 w-full h-16 mt-4">
        <img
          src={logo}
          alt=""
          className="h-24 w-24 absolute -mt-3 ml-3 rounded-full"
        />
        <div className="flex space-x-3">
          <Link to="about" smooth={true} duration={3000} className="cursor-pointer bg-yellow-500 text-[violet] mt-2 rounded-full text-center px-3 pt-2 align-middle text-xl h-11">
            About
          </Link>
          <Link to="edu" smooth={true} duration={3000} className="cursor-pointer bg-yellow-500 text-[violet] mt-2 rounded-full text-center px-3 pt-2 align-middle text-xl h-11">
            Education
          </Link>
          <Link to="skill" smooth={true} duration={3000} offset={-125} className="cursor-pointer bg-yellow-500 text-[violet] mt-2 rounded-full text-center px-3 pt-2 align-middle text-xl h-11">
            Skills
          </Link>
          <Link to="certi" smooth={true} duration={3000} offset={-125} className="cursor-pointer bg-yellow-500 text-[violet] mt-2 rounded-full text-center px-3 pt-2 align-middle text-xl h-11">
            Certificate
          </Link>
          <Link to="pro" smooth={true} duration={3000} offset={-125} className="cursor-pointer bg-yellow-500 text-[violet] mt-2 rounded-full text-center px-3 pt-2 align-middle text-xl h-11">
            Projects
          </Link>
          <Link to="con" smooth={true} duration={3000} offset={-125} className="cursor-pointer bg-yellow-500 text-[violet] mt-2 rounded-full text-center px-3 pt-2 align-middle text-xl h-11">
            Contact Info.
          </Link>
          <Link to="res" smooth={true} duration={3000} offset={-125} className="cursor-pointer bg-yellow-500 text-[violet] mt-2 rounded-full text-center px-3 pt-2 align-middle text-xl h-11">
            Resume
          </Link>
        </div>
      </nav>
    </>
  );
}
