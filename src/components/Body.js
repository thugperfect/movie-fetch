import MovieBox from "./MovieBox";
import {useState,useEffect} from 'react'
const Body = () => {

  const [latest,setLatest] = useState()
  const [action,setAction] = useState()
  const [romance,setRomance] = useState()
  const [comedy,setComedy] = useState()
  const [horror,setHorror] = useState()

  const [lpage,setLpage] = useState(1)
  const [apage,setApage] = useState(1)
  const [rpage,setRpage] = useState(1)
  const [cpage,setCpage] = useState(1)
  const [hpage,setHpage] = useState(1)
  
  
  const search="action";
  const title = "a";
  const year = 2023
  const api_key = `http://www.omdbapi.com/?s=${search}&y=${year}&apikey=68ec0e63`




  useEffect(()=>{      
  const latest_api_key = `https://www.omdbapi.com/?s=act&y=2022-2023&page=${lpage}&apikey=68ec0e63`
  const action_api_key = `https://www.omdbapi.com/?s=action&page=${apage}&apikey=68ec0e63`
  const romance_api_key =`https://www.omdbapi.com/?s=love&page=${rpage}&apikey=68ec0e63`
  const comedy_api_key =`https://www.omdbapi.com/?s=comedy&page=${cpage}&apikey=68ec0e63`
  const horror_api_key =`https://www.omdbapi.com/?s=horror&page=${hpage}&apikey=68ec0e63`

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
  const setPage =(prop) =>{
    console.log("clicked");
    if(prop === lpage){
      setLatest()
      setLpage(lpage+1)
    }
    else if(prop === apage){
      setAction()
      setApage(apage+1)
    }
    else if(prop === rpage){
      setRomance()
      setRpage(rpage+1)
    }
    else if(prop === cpage){
      setComedy()
      setCpage(cpage+1)
    }
   else if(prop === hpage){
      setHorror()
      setHpage(hpage+1)
    }


  }
  return (
    <div className=" container bg-gray-500 bg-opacity-30  h-auto mx-auto w-[80%]">
       <div className="text-2xl pt-5 cursor-pointer font-bold text-white px-5">Latest Movies</div>
      <div className="flex  overflow-x-scroll  transparent-scroll">
        

          {
            latest?.length>0?
            <div className="flex ">
          {latest.map((key)=>(
              <MovieBox movieName={key}/>
            ))} 
            {(lpage<5)?
           <div onClick={()=>setPage(lpage)}><MovieBox text={"Load More"}/></div>
           :
           ""
           
            }</div>
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
            
             
            ))} {(apage<5)?
              <div onClick={()=>setPage(apage)}><MovieBox text={"Load More"}/></div>
              :
              ""
              
               }</div>
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
            ))}  {(rpage<5)?
              <div onClick={()=>setPage(rpage)}><MovieBox text={"Load More"}/></div>
              :
              ""
              
               }</div>
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
            ))} {(cpage<5)?
              <div onClick={()=>setPage(cpage)}><MovieBox text={"Load More"}/></div>
              :
              ""
              
               } </div>
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
            ))} {(hpage<5)?
              <div onClick={()=>setPage(hpage)}><MovieBox text={"Load More"}/></div>
              :
              ""
              
               }</div>
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
