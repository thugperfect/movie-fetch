import MovieBox from "./Moviebox"
const Body = () =>{
return(
    <div className=" container bg-gray-500 bg-opacity-30  h-auto mx-auto w-[80%]">
         <div className="text-xl text-white px-5">Latest Movies</div>
         <div className="flex  overflow-x-scroll  transparent-scroll">
        <div className="flex ">
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
            </div>
        </div>
        <div className="text-xl text-white px-5">Action</div>
        <div className="flex  overflow-x-scroll transparent-scroll">
        <div className="flex gap-3">
       <MovieBox/>
       <MovieBox/>
       <MovieBox/>
       <MovieBox/>
       <MovieBox/>
       <MovieBox/><MovieBox/>
       <MovieBox/>
       <MovieBox/>
       <MovieBox/>
       <MovieBox/>
       <MovieBox/>
       <MovieBox/>

            </div>
            
       
        </div>
        <div className="text-xl text-white px-5">Romance</div>
        <div className="flex  overflow-x-scroll transparent-scroll">
        <div className="flex ">
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/><MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/><MovieBox/>

        <MovieBox/><MovieBox/>
        <MovieBox/>
        <MovieBox/><MovieBox/>
            </div>
            
       
        </div>
        <div className="text-xl text-white px-5">Comedy</div>
        <div className="flex  overflow-x-scroll transparent-scroll">
        <div className="flex ">
        <MovieBox/>
        <MovieBox/><MovieBox/><MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/><MovieBox/>
        <MovieBox/><MovieBox/><MovieBox/><MovieBox/><MovieBox/><MovieBox/>

        <MovieBox/><MovieBox/><MovieBox/>
            </div>
            <div className="text-xl text-white px-5">Horror</div>
        <div className="flex  overflow-x-scroll transparent-scroll">
        <div className="flex gap-3">
        <MovieBox/><MovieBox/><MovieBox/><MovieBox/><MovieBox/>


        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/>
        <MovieBox/><MovieBox/>
        
            </div></div>
            
       
        </div>
    </div>
)
}
export default Body