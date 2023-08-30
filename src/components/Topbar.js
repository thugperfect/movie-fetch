const Topbar = () =>{

    return(
       <div>
         <div className="h-[80px] bg-zinc-900 w-full flex items-center px-5 justify-between">
            <div className="w-[60px] h-[60px] bg-red-50 rounded-full"></div>
            <div className="flex gap-2">
                <input className=" rounded-[5px] w-full lg:w-[100px] md:w-[300px]  " type="text" placeholder="Search for Movies" ></input>
                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">Home</div>
                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">About</div>
                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">Login</div>
            </div>
        </div>
        <div className="bg-black h-[70px] w-full"></div>
       </div>
    )
}
export default Topbar