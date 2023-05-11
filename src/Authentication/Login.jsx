import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { RxLockOpen2 } from "react-icons/rx";
import AxiosApi from "../api/AxiosApi";
import { toast } from "react-toastify";
import { useNavigation } from "react-router-dom";
import { CircularProgress } from "@mui/material";


const Login = ({ next }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [show, setShow] = React.useState(false);
  const [type, setType] = useState("password");

  const changeType = () => {
    setShow(!show);
    setType(show ? "password" : "text");
  };

  // handle login

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const options = {
      method: "POST",
      url: "/user/api/v1/login/",
      headers: { "Content-Type": "application/json" },
      data: { email: email, password: password },
    };

    // console.log(options);
    AxiosApi.request(options)
      .then(function (response) {
        if (response.data?.access) {
          setIsLoading(false);
          // key value pair
          localStorage.setItem("access", JSON.stringify(response.data?.access).replace(/['"]+/g, ''));
          localStorage.setItem("refresh", JSON.stringify(response.data?.refresh).replace(/['"]+/g, ''));
          localStorage.setItem("id", JSON.stringify(response.data?.user_info?.id).replace(/['"]+/g, ''));
          localStorage.setItem("email", JSON.stringify(response.data?.user_info?.email).replace(/['"]+/g, ''));
          localStorage.setItem("full_name", JSON.stringify(response.data?.user_info?.full_name).replace(/['"]+/g, ''));
          localStorage.setItem("authenticated", true);
          localStorage.setItem("is_admin", JSON.stringify(response.data?.user_info?.is_admin).replace(/['"]+/g, ''));

          // reload the page
          window.location.reload();

          console.log(response.data?.access);
          toast.error("Login Success")
        }
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
        setError("Invalid Credentials");
      });
  };

  // handle forgot password
  const handleForgotpassword = (e) => {
    e.preventDefault();
    next(2);
  };

  return (
    <section className="w-4/6">
      {/* Login Text */}
      <h1 className="text-3xl font-sans font-semibold text-primary top-0 relative mb-4 sm:text-left md:text-left text-center">
        Welcome to Ultimagzin
      </h1>
      <form onSubmit={handleLogin}>
        <div className=" h-4/5 w-full mt-8 flex flex-col text-primary">
          <div className="email w-full h-[70px] mt-2 flex mb-4 ">
            <div className="icon w-[70px] h-[70px] border-r-2 flex items-center justify-center p-2 shadow mr-1">
              <AiOutlineMail className="text-2xl text-primary" />
            </div>
            <div className="input flex flex-1  flex-col p-2 shadow border rounded-md">
              <label
                htmlFor=""
                className="">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none text-[#142429] placeholder:text-thin"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="password w-full h-[70px] mt-2 flex">
            <div className="icon w-[70px] h-[70px] border-r-2 flex items-center justify-center p-2 shadow mr-1">
              <RxLockOpen2 className="text-2xl text-primary" />
            </div>
            <div className="input flex flex-1  flex-col p-2 shadow border rounded-md">
              <label
                htmlFor=""
                className="">
                {" "}
                Password{" "}
              </label>
              <div className="relative">
                <input
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent outline-none text-[#112026] placeholder:text-thin"
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => changeType()}>
                  {show ? (
                    <BsEye className="text-primary" />
                  ) : (
                    <BsEyeSlash className="text-primary" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="forget w-full h-[20px] flex justify-end p-2 mb-4">
            <button
              onClick={handleForgotpassword}
              className="font-sans text-md text-primary cursor-pointer">
              Forget Password?
            </button>
          </div>
          <p>
            <span className="text-red-500">{error}</span>
          </p>
          <button
            type="submit"
            className="bg-primary text-white font-sans font-semibold text-lg rounded-xl h-[50px] w-full mt-8 cursor-pointer">
            Log In
            {
              isLoading && (
                <span className="ml-2">
                  <CircularProgress size={20} />
                </span>
              )
            }
          </button>
          <span>
            <p className="text-left ml-2 text-md font-sans text-primary mt-4">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  next(1);
                }}
                className="text-primary font-semibold text-md cursor-pointer">
                Sign Up
              </span>
            </p>
          </span>
        </div>
      </form>
    </section>
  );
};

export default Login;
