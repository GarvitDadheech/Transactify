export default function Button({content}) {
    return (
        <div className="py-4">
            <button className="bg-black hover:bg-slate-800 text-white font-bold py-4 px-4 rounded w-[25rem] h-14 text-xl">
                {content}
            </button>
        </div>
    )
}