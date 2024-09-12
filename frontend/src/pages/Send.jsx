import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import User from "../components/User";

export default function Send() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const firstName = searchParams.get("name");

    const handleClick = () => {
        
    }

    return (
        <div className="bg-[#7F7F7F] h-screen flex justify-center items-center">
            <div className="flex flex-col bg-white justify-around items-center h-[550px] w-[30rem] rounded-3xl">
                <Heading value={"Send Money"}/>
                <div className="flex w-[9rem] justify-center">
                    <p className="rounded-3xl border-black border-2 h-10 w-10 flex justify-center items-center font-bold text-[20px] mr-3">
                        {firstName[0].toUpperCase()}
                    </p>
                    <div>
                        <h1 className="font-bold text-[1.8rem]">{`${firstName}`}</h1>
                    </div>
                </div>
                <InputBox Title={"Amount (in Rs.)"} PlaceHolder={"Enter Amount"}/>
                <button onClick={handleClick}>Initiate Transfer</button>  
            </div>
        </div>
    )
}