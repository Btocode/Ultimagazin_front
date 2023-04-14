import { useState } from "react";
import Login from "./Login";
import Forgotpassword from "./Forgotpassword";
import ForgotpasswordOTP from "./ForgotpasswordOTP";
// import Multipart from "./Multipart";
// import Newpassword from "./Newpassword";
// import OrgSignup from "./OrgSignup";
import Signup from "./Signup";
import UserSignup from "./UserSignup";

const Index = () => {
  const [formLocation, setFormLocation] = useState(0);
  const next = (id) => {
    setFormLocation(id);
  };

  const display = [
    <Login next={next} />,
    <UserSignup next={next} />,
    <Forgotpassword next={next} />,
    // <ForgotpasswordOTP next={next}/>,
    // <Newpassword next={next}/>
  ];

  return (
    <div className="flex sm:flex-col md:flex-col lg:flex-col justify-center items-center h-screen">
      <div className="flex wrapper w-[80%] lg:w-full h-[70vh] sm:w-full items-center border-[2px] shadow-2xl md:flex-col sm:flex-col">

     
      
      <div className="xl:flex xl:w-1/2 lg:w-1/3 w-full  justify-center items-center md:hidden sm:hidden">
        <div className="w-full lg:h-screen xl:h-screen h-[300px]  flex items-center justify-center">
          <img
            className=""
            src="../../../src/assets/images/logo3C.png"
          />
        </div>
      </div>
      <div className="div h-[50vh] bg-black border-[1px] md:hidden sm:hidden">

      </div>
      <div className="xl:w-1/2 lg:w-2/3 md:h-full w-full lg:h-screen xl:h-screen h-[500px] flex justify-center items-center">
        <div
          className={` rounded-3xl py-10 ${
            formLocation <= 4 || formLocation > 5
              ? "h-[560px] w-[700px]"
              : "xl:h-[800px] xl:w-[850px] lg:h-[850px] lg:w-[800px] sm:h-[30vh] sm:w-[600px]"
          } sm:w-full flex flex-col items-center`}>
          {/* Login Form */}
          {display[formLocation]}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Index;
