const Topbar = () =>{

    return(
       <div className="w-full">
         <div className="h-[80px] bg-zinc-900 w-full flex items-center px-5 justify-between">
            <div className="flex">
            <div className="w-[60px] h-[60px] bg-red-50 rounded-full"></div>
            <div className="text-[35px] px-5 text-green-400">Movie Fetch</div>
            </div>
   
            <div className="flex gap-2">
                <input className=" px-2 outline-0 rounded-[5px] w-full lg:w-[300px] md:w-[100px]  " type="text" placeholder="Search for Movies" ></input>
                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">Home</div>
                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">About</div>
                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">Login</div>
            </div>
        </div>
        
       </div>
    )
}
export default Topbar