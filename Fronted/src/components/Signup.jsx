import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });
  const [flag, setFlag] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!data.name || !/^[A-Za-z ]+$/.test(data.name)) {
      newErrors.name = "Name is required (letters only)";
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!data.phoneNumber || !/^[0-9]{10}$/.test(data.phoneNumber)) {
      newErrors.phoneNumber = "Phone must be 10 digits";
    }

    if (
      !data.password ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(data.password)
    ) {
      newErrors.password =
        "Password must be of 8 characteres and must have the 1 uppercase , 1lowercase and 1 number";
    }

    if (!data.agency || !/^(Yes|No)$/i.test(data.agency)) {
      newErrors.agency = "must select a one option";
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
      localStorage.setItem("local_name", data.name);
      localStorage.setItem("local_email", data.email);
    }
  };

  return (
    <>
      <div>
        <span className="block text-lg font-bold">Create your</span>
        <span className="bold text-lg font-bold">PopX account</span>

        <form onSubmit={handleSubmit}>
          <fieldset className="border border-gray-400 p-1 rounded mt-1">
            <legend className="text-sm text-blue-800">
              Full Name<span className="text-red-500">*</span>
            </legend>

            <input
              type="text"
              className="outline-none"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter your name"
              value={data.name}
            />
            {flag && errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </fieldset>

          <fieldset className="border border-gray-400 p-1 rounded mt-1">
            <legend className="text-sm text-blue-800">
              Phone number<span className="text-red-500">*</span>
            </legend>

            <input
              type="phone"
              className="outline-none"
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
              placeholder="Enter your phone number"
              value={data.phoneNumber}
            />
            {flag && errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </fieldset>

          <fieldset className="border border-gray-400 p-1 rounded mt-1">
            <legend className="text-sm text-blue-800">
              Email address<span className="text-red-500">*</span>
            </legend>

            <input
              type="email"
              className="outline-none"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Enter your email"
              value={data.email}
            />
            {flag && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </fieldset>

          <fieldset className="border border-gray-400 p-1 rounded mt-1">
            <legend className="text-sm text-blue-800">
              Password<span className="text-red-500">*</span>
            </legend>

            <input
              type="password"
              className="outline-none"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Enter your password"
              value={data.password}
            />
            {flag && errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </fieldset>

          <fieldset className="border border-gray-400 p-1 rounded mt-1">
            <legend className="text-sm text-blue-800">Company name</legend>

            <input
              type="text"
              className="outline-none"
              onChange={(e) => setData({ ...data, company: e.target.value })}
              placeholder="Enter your company"
              value={data.company}
            />
          </fieldset>

          <div className="mt-1">
            <p>
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <input
              type="radio"
              id="yes"
              name="agency"
              value="Yes"
              onChange={(e) => setData({ ...data, agency: e.target.value })}
            />
            <label htmlFor="yes" className="ml-3">
              Yes
            </label>
            <input
              type="radio"
              id="no"
              name="agency"
              value="No"
              onChange={(e) => setData({ ...data, agency: e.target.value })}
              className="ml-5"
            />
            <label htmlFor="no" className="ml-3">
              No
            </label>
            {flag && errors.agency && (
              <p className="text-red-500 text-sm">{errors.agency}</p>
            )}
          </div>

          <button
            type="submit"
            className="block w-full mt-2 bg-blue-500 text-center py-1 text-white text-sm font-semibold rounded-md cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
