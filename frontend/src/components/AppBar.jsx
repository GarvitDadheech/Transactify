import { useRecoilValue } from "recoil";
import Heading from "./Heading";
import {userAtom} from "../store/atoms/userAtom"

export default function AppBar() {
    const username = useRecoilValue(userAtom);
    return(
        <div className="w-screen flex justify-between mt-5">
            <h1 className="text-[2.5rem] font-extrabold ml-8">Payments App</h1>
            <div className="flex justify-center items-center mr-8">
                <h2 className="text-3xl mr-4">Hii, {username}</h2>
                <p className="rounded-3xl border-black border-2 h-10 w-10 flex justify-center items-center font-bold text-[20px]">{username[0].toUpperCase()}</p>
            </div>
        </div>
    )
}