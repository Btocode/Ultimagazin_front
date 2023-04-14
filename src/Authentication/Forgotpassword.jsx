import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { SlLock } from 'react-icons/sl'
import { AxiosApi } from "../api/AxiosApi"


const Forgotpassword = ({ next }) => {
    const [email, setEmail] = useState('')

    const handleForgotPassword = (e) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            url: '/accounts/api/v1/reset-password/',
            headers: { 'Content-Type': 'application/json' },
            data: { email: email }
        };

        AxiosApi.request(options).then(function (response) {
            console.log(response.data);
            // local storage email pass
            localStorage.setItem('email', JSON.stringify(email));
            next(7)

        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <section className="w-4/6">
            {/* Login Text */}
            <h1 className="text-3xl font-sans font-semibold text-primary top-0 relative mb-4 sm:text-left md:text-left text-center">
                Forgot Password
            </h1>
            <h1 className='text-primary text-center'>Please enter your email address to get one time password.</h1>
            {/* icon circle lock in the center  */}
            <div className="h-1/5 w-full flex justify-center items-center mt-4">
                <div className="icon w-[80px] h-[80px] border-8 border-primary flex items-center justify-center p-2 rounded-full">
                    <SlLock className="text-4xl text-primary" />

                </div>
            </div>
            <form onSubmit={handleForgotPassword}>
                <div className=" h-4/5 w-full mt-8 flex flex-col text-primary">
                    <div className="email w-full h-[70px] mt-2 flex mb-4 ">
                        <div className="icon w-[70px] h-[70px] border-r-2 flex items-center justify-center p-2 shadow mr-1">
                            <AiOutlineMail className="text-2xl text-primary" />
                        </div>
                        <div className="input flex flex-1  flex-col p-2 shadow border rounded-md">
                            <label htmlFor="" className=""> Email </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-transparent outline-none text-[#111A3A] placeholder:text-thin"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                        <input
                            type="button"
                            value="Back"
                            onClick={() => {
                                next(0)
                            }
                            }
                            className="bg-primary text-white font-sans font-semibold text-lg rounded-lg h-[45px] mt-8 w-[300px] cursor-pointer"
                        />

                        <button
                            type="submit"
                            className="bg-primary text-white font-sans font-semibold text-lg rounded-lg h-[45px] mt-8 w-[300px] cursor-pointer"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Forgotpassword