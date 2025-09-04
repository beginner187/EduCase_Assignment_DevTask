import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <h1 className="mt-50 mb-2 font-semibold text-xl">Welcome to PopX</h1>
        <span className="block text-md text-slate-400">
          Lorem ipsum dolor sit amet,
        </span>
        <span className="block text-md text-slate-400">
          consectetur adipisicing elit,
        </span>
        <Link to="/signup">
          <div className="mt-15 bg-blue-500 text-center py-2 text-white text-sm font-semibold rounded-md">
            Create Account
          </div>
        </Link>
        <Link to="/login">
          <div className="mt-4 bg-slate-400 text-center px-4 py-2 text-sm font-semibold rounded-md">
            Already Registered ? Login
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
