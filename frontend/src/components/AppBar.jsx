import Heading from "./Heading";

export default function AppBar() {
    return(
        <div className="w-screen flex justify-between mt-5">
            <h1 className="text-[2.5rem] font-extrabold ml-8">Payments App</h1>
            <div className="flex justify-center items-center mr-8">
                <h2 className="text-3xl mr-4">Hello, User</h2>
                <img src="User.jpeg" className="rounded bg-black h-5 w-5"/>
            </div>
        </div>
    )
}