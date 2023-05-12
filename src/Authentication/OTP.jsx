import { useEffect } from 'react';
import { useState } from 'react';
import OtpInput from 'react-input-otp';
import axios from 'axios';
import { AxiosApi } from "../api/AxiosApi"


const OTP = ({ next }) => {
    const [token, setToken] = useState("");

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

    const id = JSON.parse(localStorage.getItem('id'));

    const handleChange = (token) => setToken(token);

    // OTP Api fetch 
    const verifyOTP = async (e) => {
        e.preventDefault();

        const options = {
            method: 'POST',
            url: '/accounts/api/v1/validate-token/',
            headers: { 'Content-Type': 'application/json' },
            data: { token: token, id: id }
        };

        AxiosApi.request(options).then(function (response) {
            console.log(response.data);
            if (response.data.message === "Token is valid, You have successfully completed your registration") {              
                    next(0);
            } else {
                console.error('Error:', response.status);
            }
        }).catch(function (error) {
            console.error(error);
        });
    };


    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const resendOTP = () => {
        setMinutes(1);
        setSeconds(30);

        const options = {
            method: 'POST',
            url: '/accounts/api/v1/resend-token/',
            headers: { 'Content-Type': 'application/json' },
            data: { id: id }
        };

        AxiosApi.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    };
    return (
        <div>
            <div>
                <h1 className='text-primary text-bold text-3xl text-center sm:text-2xl'>OTP Verification</h1>
            </div>
            <div>
                <p className=' text-primary py-10 mb-6 sm:text-center sm:text-sm sm:px-10'>Enter the verification code we just sent on your email address.</p>
            </div>
            {/* OTP section */}
            <div className="flex justify-center">
                <OtpInput
                    value={token}
                    onChange={handleChange}
                    numinputs={6}
                    separator={<span className="w-[8px]"></span>}
                    isinputnum="true"
                    shouldautofocus="true"
                    inputstyle={{
                        border: "1px solid black transparent",
                        borderRadius: "8px",
                        width: "45px",
                        height: "44px",
                        fontSize: "26px",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "blue"
                    }}
                    focusstyle={{
                        border: "1px solid #CFD3DB",
                        outline: "none"
                    }}
                />
            </div>
            <div className="mt-4 flex gap-[230px] sm:gap-[110px] sm:px-10 sm:text-sm sm:text-center">
                <button disabled={seconds > 0 || minutes > 0}
                    style={{
                        color: seconds > 0 || minutes > 0 ? "text-primary" : "#FF5630",
                    }}
                    onClick={resendOTP} className="text-primary">
                    Resend Verification Code
                </button>
                <div>
                    <span className="text-primary">
                        {seconds > 0 || minutes > 0 ? (
                            <p>
                                {minutes < 10 ? `0${minutes}` : minutes}:
                                {seconds < 10 ? `0${seconds}` : seconds}
                            </p>
                        ) : (
                            '00:00'
                        )}
                    </span>
                </div>
            </div>
            <div>
                <button onClick={verifyOTP} className="w-full bg-primary text-white font-bold py-3 px-4 rounded mt-10">Verify</button>
            </div>
        </div>
    )
}

export default OTP