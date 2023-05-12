import { useState } from "react";

const Signup = ({ next }) => {
  const [fullname, setFullname] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSignUp = async (e) => {
    e.preventDefault();
    toast("Login Checked")
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
          // key value pair
          localStorage.setItem("id", JSON.stringify(response.data?.access));
          localStorage.setItem("authenticated", true);
          // reload the page
          window.location.reload();

          console.log(response.data?.access);
          toast.error("Login Success")
        }
      })
      .catch(function (error) {
        setError("Invalid Credentials");
      });
  };
  return (
    <section className="w-3/5">
      <div className=" w-[300px]">
        <h1 className="text-3xl font-sans font-semibold text-primary top-0 relative text-center ">
          Sign Up
        </h1>
        <div className="py-5 mt-10">
          <input
            id="radio1"
            type="radio"
            name="radio"
            className="hidden"
            onClick={() => {
              setSelection("user");
            }}
          />
          <label
            htmlFor="radio1"
            className="flex gap-6 items-center cursor-pointer text-xl"
          >
            <span className="w-4 h-4 inline-block mr-2 rounded-full border border-primary flex-no-shrink"></span>
            As a User{" "}
          </label>
        </div>

        <div className="mt-5">
          <input
            id="radio2"
            type="radio"
            name="radio"
            className="hidden"
            onClick={() => {
              setSelection("org");
            }}
          />
          <label
            htmlFor="radio2"
            className="flex gap-6 items-center cursor-pointer text-xl"
          >
            <span className="w-4 h-4 inline-block mr-2 rounded-full border border-primary flex-no-shrink"></span>
            As an Organization
          </label>
        </div>

        <div className="mt-5">
          {/* Make two buttons in a single line */}
          <div className="flex justify-center items-center gap-3">
            <input
              type="button"
              value="Back"
              onClick={() => {
                next(0);
              }}
              className="bg-primary text-white font-sans font-semibold text-lg rounded-xl h-[40px] w-[300px] mt-8 cursor-pointer mr-2"
            />

            <input
              type="button"
              value="Continue"
              className="bg-primary text-white font-sans font-semibold text-lg rounded-xl h-[40px] w-[300px] mt-8 cursor-pointer"
              onClick={() => {
                selection === "user" ? next(2) : next(3);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
