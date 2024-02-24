import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../zustand/user";

const Login = () => {
  const navigate = useNavigate();
  const login = userStore((state) => state.login);
  const loading = userStore((state) => state.loading);
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    login(data, navigate);
  };

  const input =
    "border-2 focus:border-cyan-800 border-zinc-300 text-zinc-500 font-[500] text-sm p-3 px-2  rounded-md w-full bg-none my-4 focus:outline-none focus:border-cyan-700";
  return (
    <span className="w-screen h-screen flex flex-col">
      {/* Introduction */}
      <span className="mx-auto mt-20 mb-14 flex flex-col gap-3 ">

        <span className="flex mx-auto gap-1">
          <h1 className="text-3xl font-bold text-blue-500 text-center shadow-md p-2 rounded-md border">
            FILE
          </h1>
          <h1 className="text-3xl font-bold text-zinc-700 p-2 text-center">
            Track
          </h1>
        </span>

        <p className="text-zinc-500 text-sm">
          Document Information and Status Web application{" "}
        </p>
      </span>

      {/* login form */}
      <form className="mx-auto grid bg-white shadow-lg min-w-[23rem] max-w-[26rem] h-auto border rounded-2xl">
        <span className="m-auto grid rounded-xl p-5 mt-8">
          <p className="text-sm text-zinc-600 font-[500] ">Enter Username</p>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            className={input}
          />
          <p className="text-sm text-zinc-600  font-[500]">Enter Password</p>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className={input}
          />

          <h4
            className="underline text-xs my-4 text-zinc-500"
            onClick={() => navigate("/reset")}
          >
            Forgot Password?
          </h4>

          <button
            type="submit"
            disabled={loading}
            className={`p-4 font-[500] text-sm border-2 rounded-full bg-zinc-700 text-white w-full mt-8 m-auto  ${
              loading && "animate-pulse"
            }`}
            onClick={handleSubmit}
          >
            {loading ? "Processing" : "Submit"}
          </button>
        </span>
      </form>
    </span>
  );
};

export default Login;
