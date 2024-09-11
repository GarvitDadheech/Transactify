import AppBar from "../components/AppBar";
import Heading from "../components/Heading";

export default function Dashboard() {
    return (
        <div>
            <AppBar/>
            <div className="h-0.5 w-screen bg-black mt-4"></div>
            <h1 className="text-3xl font-bold ml-8 mt-16">Your balance is $5000</h1>
        </div>
    )
}