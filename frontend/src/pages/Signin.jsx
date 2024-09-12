import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import {userAtom} from "../store/atoms/userAtom"

export default function Signin() {
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const setUserAtom = useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const handleSigin = async () => {
        try{
            const userData = {
                username,
                password
            }
            const res = await axios.post("http://localhost:3000/api/v1/user/login",userData)
            localStorage.setItem("token", res.data.token);
            setUserAtom(res.data.firstName+' '+res.data.lastName);
            navigate("/dashboard");
        }
        catch(error) {
            setErrorMessage("Signin failed. Please try again.");
        }
    }


    return (
        <div className="flex flex-col justify-center items-center bg-[#7F7F7F] h-screen">
            <div className="flex flex-col justify-around items-center bg-white rounded-3xl h-[550px] w-[30rem]">
                <Heading value={"Sign In"}/>
                <Subheading value={"Enter your credentials to access your Account"}/>
                <InputBox Title={"User Name"} PlaceHolder={"JohnDoe@paytm"} Type={"text"} onChange={setUserName}/>
                <InputBox Title={"Password"} PlaceHolder={""} Type={"password"} onChange={setPassword}/>
                <Button content={"Sign In"} onClick={handleSigin}/>
                <p className="text-lg">
                    Don't have an Account?
                    <span className="ml-2">
                        <Link to="/signup" className="text-lg underline">
                        Sign Up
                        </Link>
                    </span>
                </p>
            </div>
            {errorMessage && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-[30rem]">
                    <span className="text-m">{errorMessage}</span>
                </div>
            )}
        </div>
    )
}