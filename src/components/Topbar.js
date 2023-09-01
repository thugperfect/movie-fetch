const Topbar = () =>{

    return(
       <div className="w-full sticky top-0 z-10">
         <div className="h-[80px] bg-zinc-900 w-full flex items-center px-3 justify-between">
            <div className="flex">
            
            <div className="lg:text-[35px]  text-green-400 px-1 text[20px]">Movie Fetch</div>
            </div>
   
            <div className="flex gap-2">
                <input className=" px-2 outline-0 rounded-[5px]  lg:w-[300px] w-[120px]  " type="text" placeholder="Search for Movies" ></input>
                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">Home</div>
                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">Login</div>
            </div>
        </div>
        
       </div>
    )
}
export default Topbar