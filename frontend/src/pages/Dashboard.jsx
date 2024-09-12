import AppBar from "../components/AppBar";
import AllUsers from "../components/AllUsers";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [balance,setBalance] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const authHeaders = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
    
        axios.get('http://localhost:3000/api/v1/account/balance', { headers: authHeaders})
            .then(response => {
                const bal = Number(response.data.balance.toFixed(2));
                setBalance(bal);
            })
            .catch(error => {
                console.error(error);
            });
    },[]);

    return (
        <div>
            <AppBar/>
            <div className="h-0.5 w-screen bg-black mt-4"></div>
            <h1 className="text-3xl font-bold ml-8 mt-16">Your balance is ₹{balance}</h1>
            <AllUsers/>
        </div>
    )
}