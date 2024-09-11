export default function User({username,imgLink,showButton}) {
    return(
        <div className="flex justify-between mt-10 mb-5 mr-8">
            <div className="flex w-[9rem] justify-between">
                <p className="rounded-3xl border-black border-2 h-10 w-10 flex justify-center items-center font-bold text-[20px] mr-3">U</p>
                <h1 className="font-bold text-[1.8rem]">{username}</h1>
            </div>
            {showButton && (
                <button className="bg-black hover:bg-slate-800 text-white font-bold text-[20px] py-2 px-2 rounded w-[9rem] h-12 text-xl"> 
                    Send Money 
                </button> 
            )}
        </div>
    )
}