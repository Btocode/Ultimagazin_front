import React from 'react'
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { toast } from "react-toastify";
import { AxiosApi } from "../api/AxiosApi"


const OrgSignup = ({ next }) => {

  const [email, setEmail] = useState("");
  const [organization_name, setOrganization_name] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFull_name] = useState("");

  // handle org signup
  const handleOrgSignup = async (e) => {

    e.preventDefault();

    const options = {
      method: 'POST',
      url: '/organization/api/v1/signup/',
      headers: { 'Content-Type': 'application/json' },
      data: {
        email: email,
        full_name: full_name,
        organization_name: organization_name,
        password: password,
        contact: contact
      }
    };

    AxiosApi.request(options).then(function (response) {
      console.log(response.data);
      if (response.data?.id) {
        // key value pair
        localStorage.setItem('id', JSON.stringify(response.data?.id));
        console.log(response.data?.id)
        next(4)
      }
    }).catch(function (error) {
      console.error(error);
      alert(error.message)
    });
  };

  const [show, setShow] = useState(false);
  const [type, setType] = useState("password");

  const changeType = () => {
    setShow(!show);
    setType(show ? "password" : "text");
  };
  return (
    <section className="w-3/5">
      <h1 className="text-2xl font-sans font-semibold text-primary top-0 relative mb-4 sm:text-left md:text-left text-center ">
        Sign Up as Organization
      </h1>
      <form onSubmit={handleOrgSignup}>
        <div className="h-4/5 w-full mt-8 flex flex-col text-primary font-sans">
          <div className="name w-full h-[60px]  flex ">
            <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
              <label>
                Organization Name <sup className='text-red-600'>*</sup>
              </label>
              <input
                type="text"
                placeholder='Enter organization name'
                value={organization_name}
                onChange={(e) => setOrganization_name(e.target.value)}
                className="bg-transparent outline-none text-[#478298] placeholder:text-thin"
                required
              />
            </div>
          </div>
          <div className="email w-full h-[60px]  flex  ">
            <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
              <label>
                Email Address <sup className='text-red-600'>*</sup>
              </label>
              <input
                type="email"
                placeholder='Enter email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none text-[#478298] placeholder:text-thin"
                required
              />
            </div>
          </div>
          <div className="email w-full h-[60px]  flex  ">
            <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
              <label>
                Your Full Name <sup className='text-red-600'>*</sup>
              </label>
              <input
                type="text"
                placeholder='Enter your full name'
                value={full_name}
                onChange={(e) => setFull_name(e.target.value)}
                className="bg-transparent outline-none text-[#478298] placeholder:text-thin"
                required
              />
            </div>
          </div>
          <div className="contact w-full h-[60px] flex ">
            <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
              <label>
                Contact No <sup className='text-red-600'>*</sup>
              </label>
              <input
                type="tel"
                placeholder='Enter contact number'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="bg-transparent outline-none text-[#478298] placeholder:text-thin"
                required
              />
            </div>
          </div>

          <div className="password w-full h-[60px] flex">
            <div className="input flex flex-1  flex-col p-2 shadow  rounded-md">
              <label>
                Password <sup className='text-red-600'>*</sup>
              </label>
              <div className="relative">
                <input
                  type={type}
                  value={password}
                  placeholder='Enter password'
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent outline-none text-[#478298] placeholder:text-thin"
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

          <div className="flex justify-center items-center">
            <input
              type="submit"
              value="Back"
              onClick={() => {
                next(1);
              }
              }
              className="bg-primary text-white font-sans font-semibold text-lg rounded-xl h-[40px] w-[300px] mt-8 cursor-pointer mr-2"
            />

            <input
              type="submit"
              value="Sign Up"
              className="bg-primary text-white font-sans font-semibold text-lg rounded-xl h-[40px] w-[300px] mt-8 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </section>
  )
}

export default OrgSignup