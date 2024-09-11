export default function InputBox({Title,PlaceHolder}) {
    return(
        <div className="flex flex-col space-y-2">
            <label htmlFor="box" className="text-lg font-semibold text-gray-700">
                {Title}
            </label>
            <input 
                type="text" 
                id="box" 
                name="box" 
                placeholder={PlaceHolder} 
                className="w-[25rem] h-12 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-black placeholder:text-gray-450"
            />
        </div>
    )
}