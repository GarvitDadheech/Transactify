import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import User from "../components/User";

export default function Send() {
    return (
        <div className="bg-[#7F7F7F] h-screen flex justify-center items-center">
            <div className="flex flex-col bg-white justify-around items-center h-[550px] w-[30rem] rounded-3xl">
                <Heading value={"Send Money"}/>
                <User imgLink={"https://a.png"} username={"Garvit"} showButton={false}/>
                <InputBox Title={"Amount (in Rs.)"} PlaceHolder={"Enter Amount"}/>
                <Button content={"Initiate Transfer"}/>  
            </div>
        </div>
    )
}