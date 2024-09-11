import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

export default function Signup() {
    return (
        <div className="flex-col">
            <Heading value={"Sign Up"}/>
            <Subheading value={"Enter your information to create an Account"}/>
            <InputBox Title={"First Name"} PlaceHolder={"John"}/>
            <InputBox Title={"Last Name"} PlaceHolder={"Doe"}/>
            <InputBox Title={"User Name"} PlaceHolder={"JohnDoe@paytm"}/>
            <InputBox Title={"Password"} PlaceHolder={""}/>
            <Button content={"Sign Up"}/>
        </div>
    )
}