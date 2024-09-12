import { useRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from "react";
import { userAtom } from "../store/atoms/userAtom";

export default function AppBar() {
    const [username, setUsername] = useRecoilState(userAtom);

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (!username) {
                const token = localStorage.getItem("token");
                if (token) {
                    try {
                        const response = await axios.get("http://localhost:3000/api/v1/user/getInfo", {
                            headers: { Authorization: `Bearer ${token}` }
                        });
                        setUsername(response.data.user.firstName+' '+response.data.user.lastName);
                    } catch (error) {
                        console.error("Failed to fetch user info", error);
                    }
                }
            }
        };

        fetchUserInfo();
    }, [username, setUsername]);

    if (!username) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-screen flex justify-between mt-5">
            <h1 className="text-[2.5rem] font-extrabold ml-8">Payments App</h1>
            <div className="flex justify-center items-center mr-8">
                <h2 className="text-3xl mr-4">Hi, {username}</h2>
                <p className="rounded-3xl border-black border-2 h-10 w-10 flex justify-center items-center font-bold text-[20px]">
                    {username[0].toUpperCase()}
                </p>
            </div>
        </div>
    );
}