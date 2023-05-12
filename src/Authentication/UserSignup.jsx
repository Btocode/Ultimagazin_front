import React from 'react'
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SiNamecheap } from "react-icons/si";
import { RxLockOpen2 } from "react-icons/rx";
import AxiosApi from "../api/AxiosApi";


const UserSignup = ({ next }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleUserSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const options = {
      method: 'POST',
      url: '/user/api/v1/register/',
      headers: { 'Content-Type': 'application/json' },
      data: { email: email, password: password, full_name: name }
    };

    console.log(options);
    AxiosApi.request(options).then(function (response) {
      console.log("hello");
      if (response.status === 201) {
        // key value pair
        localStorage.setItem('id', JSON.stringify(response.data?.id));
        setIsLoading(false);
        next(3)
      }
    }).catch(function (error) {
      console.log("error");
      console.log(error);
      setError('Email Already exists');
      setIsLoading(false);
    });
  }

  const [show, setShow] = useState(false);
  const [type, setType] = useState("password");

  const changeType = () => {
    setShow(!show);
    setType(show ? "password" : "text");
  };
  return (
    <section className="w-4/6">
      <h1 className="text-3xl font-sans font-semibold text-primary top-0 relative mb-4 sm:text-left md:text-left text-center ">
        Hello! Let’s get you started...
      </h1>
      <form onSubmit={handleUserSignup} >
        <div className=" h-4/5 w-full mt-8 flex flex-col text-primary">
          <div className="name w-full h-[70px] mt-1 flex mb-2 ">
            <div className="icon w-[70px] h-[70px] border-r-2 flex items-center justify-center p-2 shadow mr-1">
              <SiNamecheap className="text-2xl text-primary" />
            </div>
            <div className="input flex flex-1  flex-col p-2 shadow border rounded-md">
              <label
                className="">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent outline-none text-[#162b32] placeholder:text-thin"
                placeholder='Enter your Full Name'
                required
              />
            </div>
          </div>
          <div className="email w-full h-[70px] mt-1 flex mb-2 ">
            <div className="icon w-[70px] h-[70px] border-r-2 flex items-center justify-center p-2 shadow mr-1">
              <AiOutlineMail className="text-2xl text-primary" />
            </div>
            <div className="input flex flex-1  flex-col p-2 shadow border rounded-md">
              <label
                className="">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none text-[#162b32] placeholder:text-thin"
                placeholder='Enter your email'
                required
              />
            </div>
          </div>
          <div className="password w-full h-[70px] mt-1 flex">
            <div className="icon w-[70px] h-[70px] border-r-2 flex items-center justify-center p-2 shadow mr-1">
              <RxLockOpen2 className="text-2xl text-primary" />
            </div>
            <div className="input flex flex-1  flex-col p-2 shadow border rounded-md">
              <label
                className="">
                Password
              </label>
              <div className="relative">
                <input
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent outline-none text-[#162b32] placeholder:text-thin"
                  placeholder='Enter your password'
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
          <div className="text-red-500 text-sm font-sans text-left mt-2">
            {error}
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              type="submit"
              className="bg-primary text-white font-sans font-semibold text-lg rounded-lg h-[45px] mt-8 w-[300px] cursor-pointer"
              onClick={() => {
                next(0);
              }}
            >
              Back
            </button>
            <input
              type="submit"
              className="bg-primary text-white font-sans font-semibold text-lg rounded-lg h-[45px] mt-8 w-[300px] cursor-pointer"
              value={isLoading ? "Loading..." : "Sign Up"}
            />
          </div>
          <span>
            <p className="text-left ml-2 text-md font-sans text-primary mt-4">
              Already Have an account?{" "}
              <span
                className="text-primary font-semibold text-md cursor-pointer"
                onClick={() => {
                  next(0)
                }}>
                Log In
              </span>
            </p>
          </span>
        </div>
      </form>
    </section>
  )
}

export default UserSignup