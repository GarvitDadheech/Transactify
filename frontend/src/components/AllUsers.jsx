import User from "./User";

export default function AllUsers() {
    return(
        <div className="flex flex-col ml-8 mt-16">
            <label htmlFor="username" className="text-3xl font-extrabold mb-8">Users</label>
            <input 
                type="text" 
                id="username" 
                name="box" 
                placeholder="Search Users..." 
                className=" mr-8 h-12 shadow-slate-900 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-black placeholder:text-gray-450 placeholder:text-slate-500"
                autoComplete="off"
            />
            <User username={"Garvit"} imgLink={"https://a.png"}/>
        </div>
    )
}