import { AxiosApi } from "../api/AxiosApi"
import React from 'react'
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { RxLockOpen2 } from 'react-icons/rx';

const Newpassword = ({ next }) => {
    const [newpassword, setNewpassword] = useState("");
    const [show, setShow] = React.useState(false);
    const [type, setType] = useState("password");

    const changeType = () => {
        setShow(!show);
        setType(show ? "password" : "text");
    };

    const email = JSON.parse(localStorage.getItem('email'));
    const code = JSON.parse(localStorage.getItem('unique_code'));

    const handleNewpassword = (e) => {
        e.preventDefault();

        const options = {
            method: 'POST',
            url: '/accounts/api/v1/change-password/',
            headers: { 'Content-Type': 'application/json' },
            data: {
                email: email,
                code: code,
                password: newpassword
            }
        };

        AxiosApi.request(options).then(function (response) {
            console.log(response.data);
            next(0)
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <div>
            {/* newpassword input field */}
            <form onSubmit={handleNewpassword}>
                <div className="password w-full h-[60px] mt-2 flex">
                    <div className="icon w-[60px] h-[60px] border-r-2 flex items-center justify-center p-2 shadow mr-1">
                        <RxLockOpen2 className="text-2xl text-primary" />
                    </div>
                    <div className="input flex flex-1  flex-col p-2 shadow border rounded-md">
                        <label className=""> Password </label>
                        <div className="relative">
                            <input
                                type={type}
                                value={newpassword}
                                onChange={(e) => setNewpassword(e.target.value)}
                                className="bg-transparent outline-none text-[#478298] placeholder:text-thin"
                                placeholder='Enter new password'
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
                <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 px-4 rounded mt-10"
                >
                    Send
                </button>
            </form>

        </div>

    )
}

export default Newpassword