import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#7F7F7F] h-screen">
            <div className="flex flex-col justify-around items-center bg-white rounded-3xl h-[750px] w-[30rem]">
                <Heading value={"Sign Up"}/>
                <Subheading value={"Enter your information to create an Account"}/>
                <InputBox Title={"First Name"} PlaceHolder={"John"} Type={"text"}/>
                <InputBox Title={"Last Name"} PlaceHolder={"Doe"} Type={"text"}/>
                <InputBox Title={"User Name"} PlaceHolder={"JohnDoe@paytm"} Type={"text"}/>
                <InputBox Title={"Password"} PlaceHolder={""} Type={"password"}/>
                <Button content={"Sign Up"}/>
                <p className="text-lg">
                    Already have an account?
                    <span className="ml-2">
                        <Link to="/signin" className="text-lg underline">
                        Login
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}