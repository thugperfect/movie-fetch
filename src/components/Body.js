import MovieBox from "./MovieBox";
import {useState,useEffect} from 'react'
const Body = () => {

  const [latest,setLatest] = useState()
  const [action,setAction] = useState()
  const [romance,setRomance] = useState()
  const [comedy,setComedy] = useState()
  const [horror,setHorror] = useState()
  const search="action";
  const title = "a";
  const year = 2023
  const api_key = `http://www.omdbapi.com/?s=${search}&y=${year}&apikey=68ec0e63`
  const latest_api_key = `http://www.omdbapi.com/?s=act&y=2023&apikey=68ec0e63`
  const action_api_key = `http://www.omdbapi.com/?s=action&apikey=68ec0e63`
  const romance_api_key = `http://www.omdbapi.com/?s=romance&apikey=68ec0e63`
  const comedy_api_key = `http://www.omdbapi.com/?s=comedy&apikey=68ec0e63`
  const horror_api_key = `http://www.omdbapi.com/?s=horror&apikey=68ec0e63`



  useEffect(()=>{
    const fetchMovie =async () =>{
      const latest_movies =await fetch(latest_api_key)
      const action_movies =await fetch(action_api_key)
      const romance_movies =await fetch(romance_api_key)
      const comedy_movies =await fetch(comedy_api_key)
      const horror_movies =await fetch(horror_api_key)
      const latest_cont = await latest_movies.json()
      const action_cont = await action_movies.json()
      const romance_cont = await romance_movies.json()
      const comedy_cont = await comedy_movies.json()
      const horror_cont = await horror_movies.json()
     setLatest(latest_cont.Search)
     setAction(action_cont.Search)
     setRomance(romance_cont.Search)
     setComedy(comedy_cont.Search)
     setHorror(horror_cont.Search)
    }
    fetchMovie()
  },[])
  

  return (
    <div className=" container bg-gray-500 bg-opacity-30  h-auto mx-auto w-[80%]">
       <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Latest Movies</div>
      <div className="flex  overflow-x-scroll  transparent-scroll">
        

          {
            latest?.length>0?
            <div className="flex ">
          {latest.map((key)=>(
              <MovieBox movieName={key}/>
            ))} </div>
            :<div className="flex ">
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
           
           
            </div>
          }

       
      </div>
      
      <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Action</div>
      <div className="flex  overflow-x-scroll transparent-scroll">
      {
            action?.length>0?
            <div className="flex ">
          {action.map((key)=>(
              <MovieBox movieName={key}/>
            ))} </div>
            :<div className="flex ">
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
           
           
            </div>
          }

      </div>
      <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Romance</div>
      <div className="flex  overflow-x-scroll transparent-scroll">
      {
            romance?.length>0?
            <div className="flex ">
          {romance.map((key)=>(
              <MovieBox movieName={key}/>
            ))} </div>
            :<div className="flex ">
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
           
           
            </div>
          }

      </div>
      <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Comedy</div>
      <div className="flex  overflow-x-scroll transparent-scroll">
      {
            comedy?.length>0?
            <div className="flex ">
          {comedy.map((key)=>(
              <MovieBox movieName={key}/>
            ))} </div>
            :<div className="flex ">
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
           
           
            </div>
          }

        </div>
        <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Horror</div>
        <div className="flex  overflow-x-scroll transparent-scroll">
        {
            horror?.length>0?
            <div className="flex ">
          {horror.map((key)=>(
              <MovieBox movieName={key}/>
            ))} </div>
            :<div className="flex ">
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
              <MovieBox/>
           
           
            </div>
          }

        </div>
       
      </div>

  );
};
export default Body;
