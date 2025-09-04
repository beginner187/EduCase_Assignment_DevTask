import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (
      !data.password ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(data.password)
    ) {
      newErrors.password =
        "Password must be of 8 characteres and must have the 1 uppercase , 1lowercase and 1 number";
    }

    setErrors(newErrors);
    //console.log(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      alert("Could not be validated");
      setFlag(true);
    } else {
      setErrors({});
      alert("successfully validated");
      setFlag(false);
      navigate("/profile");
      localStorage.setItem("local_email", data.email);
      localStorage.setItem("local_name", data.email.split("@")[0]);
    }
  };

  return (
    <>
      <div>
        <span className="block text-lg font-bold">Signin to your</span>
        <span className="bold text-lg font-bold">PopX account</span>

        <span className="block text-sm text-slate-400 mt-2">
          Lorem ipsum dolor sit amet,
        </span>
        <span className="block text-sm text-slate-400">
          consectetur adipisicing elit,
        </span>

        <form onSubmit={handleSubmit}>
          <fieldset className="border border-gray-400 p-2 rounded mt-2">
            <legend className="text-sm text-blue-800">
              Email address<span className="text-red-500">*</span>
            </legend>

            <input
              type="text"
              className="outline-none"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              placeholder="Enter your email"
            />
            {flag && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </fieldset>

          <fieldset className="border border-gray-400 p-2 rounded mt-2">
            <legend className="text-sm text-blue-800">
              Password<span className="text-red-500">*</span>
            </legend>

            <input
              type="text"
              className="outline-none"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              value={data.password}
              placeholder="Enter your password"
            />
            {flag && errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </fieldset>

          <button
            type="submit"
            className="block w-full mt-10 bg-slate-800 text-center px-2 py-1 text-white text-sm font-semibold rounded-md mb-20 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
