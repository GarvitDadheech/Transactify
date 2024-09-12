import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { useState } from "react";
import axios from "axios";

export default function Send() {
    const [searchParams] = useSearchParams();
    const to = searchParams.get("id");
    const firstName = searchParams.get("name");
    const [amount, setAmount] = useState("");
    const [transactionStatus, setTransactionStatus] = useState(""); 
    const navigate = useNavigate();

    const handleClick = async () => {
        const sendBody = {
            amount,
            to
        };
    
        const token = localStorage.getItem("token");
        
        const authHeaders = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
    
        try {
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer", sendBody, {
                headers: authHeaders
            });
            
            if (response.status === 200) {
                setTransactionStatus("Transaction successful! Redirecting to dashboard...");
                setTimeout(() => {

                    navigate("/dashboard");
                }, 3000);
            } else {
                setTransactionStatus("Transaction failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setTransactionStatus("Transaction failed. Insufficient funds or error occurred."); 
        }
    };
    
    return (
        <div className="bg-[#7F7F7F] h-screen flex justify-center items-center">
            <div className="flex flex-col bg-white justify-around items-center h-[550px] w-[30rem] rounded-3xl">
                <Heading value={"Send Money"}/>
                <div className="flex w-[30rem] justify-center">
                    <p className="rounded-3xl border-black border-2 h-10 w-10 flex justify-center items-center font-bold text-[20px] mr-3">
                        {firstName[0].toUpperCase()}
                    </p>
                    <div>
                        <h1 className="font-bold text-[1.8rem]">{`${firstName}`}</h1>
                    </div>
                </div>
                <InputBox Title={"Amount (in Rs.)"} PlaceHolder={"Enter Amount"} onChange={setAmount}/>
                <button onClick={handleClick} className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded w-[25rem] h-14 text-xl">Initiate Transfer</button>  

                {transactionStatus && (
                    <div className={`mt-4 p-4 w-[25rem] text-center rounded ${transactionStatus.includes('successful') ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                        {transactionStatus}
                    </div>
                )}
            </div>
        </div>
    );
}
