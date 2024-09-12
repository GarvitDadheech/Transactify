import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const userData = {
                firstName,
                lastName,
                username,
                password
            };

            const res = await axios.post("http://localhost:3000/api/v1/user/signup", userData);
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        } catch (error) {
            setErrorMessage("Signup failed. Please try again.");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center bg-[#7F7F7F] h-screen">
            <div className="flex flex-col justify-around items-center bg-white rounded-3xl h-[750px] w-[30rem]">
                <Heading value={"Sign Up"} />
                <Subheading value={"Enter your information to create an Account"} />
                <InputBox Title={"First Name"} PlaceHolder={"John"} Type={"text"} onChange={setFirstName} />
                <InputBox Title={"Last Name"} PlaceHolder={"Doe"} Type={"text"} onChange={setLastName} />
                <InputBox Title={"User Name"} PlaceHolder={"JohnDoe@paytm"} Type={"text"} onChange={setUserName} />
                <InputBox Title={"Password"} PlaceHolder={""} Type={"password"} onChange={setPassword} />
                <Button onClick={handleSignup} content={"Sign Up"} />
                <p className="text-lg">
                    Already have an account?
                    <span className="ml-2">
                        <Link to="/signin" className="text-lg underline">
                            Login
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
    );
}
