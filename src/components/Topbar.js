import { useState,useEffect } from "react"
const Topbar = ({search,fromBody}) =>{
const [movie,setMovie] = useState()

const [searchres,setSearch] = useState("")


    useEffect(()=>{
        setMovie(fromBody)
    },[fromBody])
      console.log(searchres);
    return(
       <div className="w-full sticky top-0 z-10">
         <div className="h-[80px] bg-zinc-900 w-full flex items-center px-3 justify-between">
            <div className="flex">
            
            <div className="lg:text-[35px]  text-green-400 px-1 text[20px]">Movie Fetch</div>
            </div>
   
            <div className="flex gap-2">
                <div className="relative">
                <input className=" px-2 outline-0 rounded-[5px]  lg:w-[350px] w-[140px]" onChange={(e)=>{search(e.target.value);setSearch(e.target.value)}} type="text" placeholder="Search for Movies" ></input>
                <div className="absolute lg:w-[350px] w-[140px] text-white flex flex-col cursor-pointer">

                    {  
                  (searchres)?
                  movie?.length>0?
                            movie.map((prop)=>(
                                <div className=" w-full h-[60px] bg-zinc-800 px-5  flex items-center gap-2">
                                    <img className="h-[40px] w-[40px] rounded-full" src={prop.Poster} alt="none" />
                                    <div>{prop.Title}</div>
                                </div>
                            )):
                        "" :""                        
                            
                     }
           

                </div>

                </div>
                

                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">Home</div>
                <div className="text-gray-500 hover:text-gray-600 cursor-pointer">Login</div>
            </div>
        </div>
        
       </div>
    )
}
export default Topbar