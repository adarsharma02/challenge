// import { ClassNames } from "@emotion/react";
import React from "react";

function Nav(props) {
  return (
    <div>
      <div
        id="nav-bar"
        className="flex items-center justify-between p-4 bg-blue-500"
      >
        <img
          src="https://logo.com/image-cdn/images/kts928pd/production/75bbc1ddc2f2bfc418c7ba57c1dba5ab939a1e21-500x375.webp?w=1080&q=72"
          width={100}
          height={100}
          alt="Company Logo"
        />

        <div className="flex items-center ml-4">
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-2 rounded-md border"
          />
        </div>

        <div className="flex items-center">
          <button
            className="
                bg-white text-blue-500 px-2 py-1 rounded-md mr-2
                "
            // onClick={
            //   isactive ? (ClassNames = "bg-blue") : (ClassNames = "bg-white")

            onClick={props.handelLoginClick}
          >
            Log In
          </button>
          <button
            className="bg-white text-blue-500 px-2 py-1 rounded-md mr-10"
            onClick={props.handelSignup}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
