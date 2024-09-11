export default function User({username,imgLink}) {
    return(
        <div className="flex justify-between mt-10 mr-8">
            <div className="flex w-[8rem] justify-between">
                <img src={imgLink} className="rounded bg-black h-10 w-10 mr-4"/>
                <h1 className="font-bold text-[1.8rem]">{username}</h1>
            </div>
            <button className="bg-black hover:bg-slate-800 text-white font-bold text-[20px] py-2 px-2 rounded w-[9rem] h-12 text-xl">
                Send Money
            </button>
        </div>
    )
}