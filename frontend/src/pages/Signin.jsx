import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#7F7F7F] h-screen">
            <div className="flex flex-col justify-around items-center bg-white rounded-3xl h-[550px] w-[30rem]">
                <Heading value={"Sign In"}/>
                <Subheading value={"Enter your credentials to access your Account"}/>
                <InputBox Title={"User Name"} PlaceHolder={"JohnDoe@paytm"}/>
                <InputBox Title={"Password"} PlaceHolder={""}/>
                <Button content={"Sign In"}/>
                <p className="text-lg">
                    Don't have an Account?
                    <span className="ml-2">
                        <Link to="/signup" className="text-lg underline">
                        Sign Up
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}