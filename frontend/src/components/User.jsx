import { useNavigate } from "react-router-dom";

export default function User({ firstName, lastName, id}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/send?id="+id+"&name="+firstName);
    };

    return (
        <div className="flex justify-between mt-10 mb-5 mr-8 ml-8">
            <div className="flex w-[25rem] justify-start">
                <p className="rounded-3xl border-black border-2 h-10 w-10 flex justify-center items-center font-bold text-[20px] mr-3">
                    {firstName[0].toUpperCase()}
                </p>
                <div>
                    <h1 className="font-bold text-[1.8rem]">{`${firstName} ${lastName}`}</h1>
                </div>
            </div>
            <button
                className="bg-black hover:bg-slate-800 text-white font-bold text-[20px] py-2 px-2 rounded w-[9rem] h-12 text-xl"
                onClick={handleClick}
            >
                Send Money
            </button>
        </div>
    );
}
