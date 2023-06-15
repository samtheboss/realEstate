import React from "react";
import logo from "../logo.png";
import { useLocation, useNavigate } from "react-router";
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={logo}
            className="h-5 cursor-pointer"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="">
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer  py-3 text-sm font-semibold 
            text-gray-400 border-b-[5px] border-b-transparent
            ${pathMatchRoute("/") && "text-green-700 border-b-red-600"} `}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold 
            text-gray-400 border-b-[5px] border-b-transparent
            ${pathMatchRoute("/offers") && "text-green-700 border-b-red-600"} `}
              onClick={() => {
                navigate("/offers");
              }}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold 
            text-gray-400 border-b-[5px] border-b-transparent
            ${pathMatchRoute("/signin") && "text-green-700 border-b-red-600"} `}
              onClick={() => {
                navigate("/signin");
              }}
            >
              SignIn
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
