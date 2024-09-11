export default function Button({content}) {
    return (
        <button className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
            {content}
        </button>
    )
}